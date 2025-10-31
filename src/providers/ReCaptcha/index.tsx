'use client'

import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export const ReCaptchaProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  // Read site key from environment variable (public, can be exposed to client)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  // If no site key configured, just render children without reCAPTCHA
  if (!siteKey) {
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
