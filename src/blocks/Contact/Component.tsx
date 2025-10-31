'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import React, { useState, useEffect } from 'react'
import { getIconComponent, IconName } from '@/lib/icons'
import { toast } from 'sonner'
import Link from 'next/link'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

interface InfoCard {
  icon: IconName
  heading: string
  description: string
}

interface FormField {
  fieldType: 'text' | 'email' | 'tel' | 'number' | 'textarea'
  name: string
  label: string
  placeholder?: string
  icon?: IconName
  width: 'full' | 'half' | 'third'
  required: boolean
  rows?: number
}

interface PrivacyPolicy {
  enabled: boolean
  text?: string
  privacyLink?: string
}

interface SubmitButton {
  text: string
}

interface ContactSettings {
  title: string
  infoCards?: InfoCard[]
  formFields?: FormField[]
  privacyPolicy?: PrivacyPolicy
  submitButton?: SubmitButton
}

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [settings, setSettings] = useState<ContactSettings | null>(null)
  const [formData, setFormData] = useState<Record<string, string | boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)

  // Fetch contact form settings
  useEffect(() => {
    async function fetchSettings() {
      try {
        const response = await fetch('/api/globals/contact-form-settings')
        const data = await response.json()
        setSettings(data)

        // Initialize form data with field names
        const initialData: Record<string, string | boolean> = {}
        data.formFields?.forEach((field: FormField) => {
          initialData[field.name] = ''
        })
        setFormData(initialData)
      } catch (error) {
        console.error('Error fetching contact settings:', error)
        toast.error('Failed to load contact form')
      } finally {
        setLoading(false)
      }
    }

    fetchSettings()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Try to execute reCAPTCHA if available
      let recaptchaToken: string | undefined

      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form_submit')
        } catch (error) {
          console.warn('reCAPTCHA execution failed:', error)
          // Continue without reCAPTCHA token - backend will check if it's required
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Your message has been sent successfully!')
        // Reset form
        const resetData: Record<string, string | boolean> = {}
        settings?.formFields?.forEach((field) => {
          resetData[field.name] = ''
        })
        setFormData(resetData)
      } else {
        toast.error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getWidthClass = (width: 'full' | 'half' | 'third') => {
    switch (width) {
      case 'half':
        return 'w-full lg:w-[calc(50%-0.5rem)]'
      case 'third':
        return 'w-full lg:w-[calc(33.333%-0.67rem)]'
      default:
        return 'w-full'
    }
  }

  if (loading) {
    return (
      <AnimateOnScroll type="fade-up">
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center">Loading...</p>
          </div>
        </div>
      </AnimateOnScroll>
    )
  }

  if (!settings) {
    return (
      <AnimateOnScroll type="fade-up">
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-red-500">Failed to load contact form settings</p>
          </div>
        </div>
      </AnimateOnScroll>
    )
  }

  return (
    <AnimateOnScroll type="fade-up">
      <div className="flex justify-center items-center bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row">
          {/* Left Section - Info Cards */}
          <div className="w-full lg:w-[45%] pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[500] mb-4">
              {settings.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {settings.infoCards?.map((card, index) => {
                const IconComponent = getIconComponent(card.icon)
                return (
                  <div key={index} className="flex gap-3">
                    {IconComponent && <IconComponent className="text-[#ef6c33] mt-1" />}
                    <div>
                      <p className="text-lg font-semibold mb-2">{card.heading}</p>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[55%] pl-0 lg:pl-8">
            <form onSubmit={handleSubmit} className="space-y-4 p-6 lg:p-8 border-2 border-gray-200 rounded-xl shadow-lg bg-white">
              <div className="flex flex-wrap gap-4">
                {settings.formFields?.map((field, index) => {
                  const IconComponent = field.icon ? getIconComponent(field.icon) : null

                  return (
                    <div key={index} className={getWidthClass(field.width)}>
                      <h4 className="py-2">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </h4>
                      {field.fieldType === 'textarea' ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          rows={field.rows || 5}
                          required={field.required}
                          value={(formData[field.name] as string) || ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#ef6c33] focus:ring-2 focus:ring-[#ef6c33]/20 transition-all shadow-sm"
                        />
                      ) : (
                        <div className="relative">
                          {IconComponent && (
                            <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                              <IconComponent />
                            </i>
                          )}
                          <input
                            type={field.fieldType}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={(formData[field.name] as string) || ''}
                            onChange={handleInputChange}
                            className={`w-full ${IconComponent ? 'pl-10' : 'pl-4'} pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#ef6c33] focus:ring-2 focus:ring-[#ef6c33]/20 transition-all shadow-sm`}
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Privacy Policy Message */}
              {settings.privacyPolicy?.enabled && (
                <div className="text-sm text-gray-600 py-2">
                  By submitting this form, you are agreeing to Wilson Consulting Group&apos;s{' '}
                  {settings.privacyPolicy.privacyLink ? (
                    <Link
                      href={settings.privacyPolicy.privacyLink}
                      className="text-[#ef6c33] hover:underline font-medium"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  ) : (
                    <span className="text-[#ef6c33] font-medium">Privacy Policy</span>
                  )}
                  .
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-wils_orang hover:bg-primary text-white px-5 !py-3.5 !rounded-lg md:text-xl text-base font-semibold md:!px-[60px] secondary_btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-20">
                  {isSubmitting ? 'Sending...' : settings.submitButton?.text || 'Submit'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
