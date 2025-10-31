import nodemailer from 'nodemailer'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export interface ContactFormData {
  [key: string]: string | boolean
}

export async function sendContactEmail(formData: ContactFormData): Promise<{
  success: boolean
  error?: string
}> {
  try {
    // Fetch SMTP settings from ContactFormSettings global
    const payload = await getPayload({ config: configPromise })
    const settings = await payload.findGlobal({
      slug: 'contact-form-settings',
    })

    // Check if SMTP is enabled
    if (!settings?.smtp?.enabled) {
      return {
        success: false,
        error: 'Email notifications are not enabled',
      }
    }

    const smtp = settings.smtp

    // Validate required SMTP fields
    if (!smtp.host || !smtp.port || !smtp.username || !smtp.password || !smtp.recipientEmail) {
      return {
        success: false,
        error: 'SMTP configuration is incomplete',
      }
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure ?? false, // true for 465, false for other ports
      auth: {
        user: smtp.username,
        pass: smtp.password,
      },
    })

    // Build email body from form data
    let emailBody = '<h2>New Contact Form Submission</h2><br/>'
    emailBody += '<table style="border-collapse: collapse; width: 100%;">'

    for (const [key, value] of Object.entries(formData)) {
      // Skip privacy policy checkbox
      if (key === 'privacyPolicy') continue

      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
      emailBody += `
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; width: 30%;">${label}</td>
          <td style="border: 1px solid #ddd; padding: 8px; width: 70%;">${value}</td>
        </tr>
      `
    }

    emailBody += '</table><br/>'
    emailBody += '<p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>'

    // Send email
    await transporter.sendMail({
      from: `"${smtp.fromName || 'Contact Form'}" <${smtp.fromEmail}>`,
      to: smtp.recipientEmail,
      subject: 'New Contact Form Submission',
      html: emailBody,
      replyTo: formData.email as string || undefined,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    }
  }
}
