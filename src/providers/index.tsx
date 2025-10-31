import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ReCaptchaProvider } from './ReCaptcha'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <ReCaptchaProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ReCaptchaProvider>
    </ThemeProvider>
  )
}
