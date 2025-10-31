import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, ContactFormData } from '@/lib/email'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

// Rate limiting (simple in-memory implementation)
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3 // 3 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

async function verifyRecaptcha(
  token: string,
  secretKey: string,
  scoreThreshold: number = 0.5,
): Promise<{ success: boolean; score?: number; error?: string }> {
  if (!secretKey) {
    console.error('reCAPTCHA secret key is not configured')
    return { success: false, error: 'reCAPTCHA not configured' }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    // Check if verification was successful and score is above threshold
    if (data.success && data.score >= scoreThreshold) {
      return { success: true, score: data.score }
    }

    return {
      success: false,
      score: data.score,
      error: `Score ${data.score} below threshold ${scoreThreshold}`,
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return { success: false, error: 'Verification failed' }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    // Parse request body
    const body = await request.json()
    const { recaptchaToken, ...formData }: { recaptchaToken?: string } & ContactFormData = body

    // Fetch contact form settings to validate and check reCAPTCHA config
    const payload = await getPayload({ config: configPromise })
    const settings = await payload.findGlobal({
      slug: 'contact-form-settings',
      select: {
        formFields: true,
        privacyPolicy: true,
        recaptcha: true,
      },
    })

    // Check if reCAPTCHA is enabled and verify token
    if (settings.recaptcha?.enabled) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification is required. Please try again.' },
          { status: 400 },
        )
      }

      const secretKey = settings.recaptcha.secretKey
      const scoreThreshold = settings.recaptcha.scoreThreshold || 0.5

      if (!secretKey) {
        console.error('reCAPTCHA is enabled but secret key is not configured')
        return NextResponse.json(
          { error: 'reCAPTCHA is not properly configured. Please contact support.' },
          { status: 500 },
        )
      }

      const recaptchaResult = await verifyRecaptcha(recaptchaToken, secretKey, scoreThreshold)

      if (!recaptchaResult.success) {
        console.warn('reCAPTCHA verification failed:', recaptchaResult)
        return NextResponse.json(
          {
            error:
              'reCAPTCHA verification failed. You may be identified as a bot. Please try again.',
          },
          { status: 400 },
        )
      }
    }

    // Validate required fields
    const requiredFields = settings.formFields?.filter((field: any) => field.required) || []
    const missingFields: string[] = []

    for (const field of requiredFields) {
      if (!formData[field.name] || formData[field.name] === '') {
        missingFields.push(field.label || field.name)
      }
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Please fill in all required fields: ${missingFields.join(', ')}` },
        { status: 400 },
      )
    }

    // Sanitize input data (basic sanitization)
    const sanitizedData: ContactFormData = {}
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'string') {
        // Remove potential XSS attempts
        sanitizedData[key] = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      } else {
        sanitizedData[key] = value
      }
    }

    // Send email
    const result = await sendContactEmail(sanitizedData)

    if (!result.success) {
      return NextResponse.json({ error: result.error || 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 },
    )
  }
}
