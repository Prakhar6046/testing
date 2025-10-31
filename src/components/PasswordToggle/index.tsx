'use client'

import { useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

/**
 * Component that adds password visibility toggle to auth pages
 * Injects eye icons into password fields on hover
 */
export default function PasswordToggle() {
  useEffect(() => {
    const addPasswordToggle = () => {
      // Find all password inputs
      const passwordInputs = document.querySelectorAll('input[type="password"]')

      passwordInputs.forEach((input) => {
        // Skip if toggle already exists
        if (input.parentElement?.querySelector('.password-toggle-icon')) {
          return
        }

        const wrapper = input.parentElement
        if (!wrapper) return

        // Make wrapper position relative for absolute positioning
        wrapper.style.position = 'relative'

        // Create toggle button
        const toggleButton = document.createElement('button')
        toggleButton.type = 'button'
        toggleButton.className = 'password-toggle-icon'
        toggleButton.setAttribute('aria-label', 'Toggle password visibility')
        toggleButton.style.cssText = `
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          opacity: 0;
          transition: opacity 0.2s;
          z-index: 10;
        `

        // Create eye icon (closed by default)
        const eyeIcon = document.createElement('span')
        eyeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        `
        eyeIcon.style.display = 'flex'
        eyeIcon.style.alignItems = 'center'

        toggleButton.appendChild(eyeIcon)
        wrapper.appendChild(toggleButton)

        // Show icon on input hover or focus
        const showIcon = () => {
          toggleButton.style.opacity = '1'
        }

        const hideIcon = () => {
          if (input !== document.activeElement) {
            toggleButton.style.opacity = '0'
          }
        }

        input.addEventListener('mouseenter', showIcon)
        input.addEventListener('focus', showIcon)
        input.addEventListener('mouseleave', hideIcon)
        input.addEventListener('blur', hideIcon)
        toggleButton.addEventListener('mouseenter', showIcon)
        toggleButton.addEventListener('mouseleave', () => {
          if (input !== document.activeElement) {
            toggleButton.style.opacity = '0'
          }
        })

        // Toggle password visibility
        toggleButton.addEventListener('click', () => {
          const isPassword = input.getAttribute('type') === 'password'

          if (isPassword) {
            input.setAttribute('type', 'text')
            eyeIcon.innerHTML = `
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
              </svg>
            `
          } else {
            input.setAttribute('type', 'password')
            eyeIcon.innerHTML = `
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            `
          }
        })
      })
    }

    // Run initially
    addPasswordToggle()

    // Re-run when DOM changes (for dynamically loaded content)
    const observer = new MutationObserver(() => {
      addPasswordToggle()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
