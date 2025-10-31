import { GlobalConfig } from 'payload'
import { iconOptions } from '@/lib/icons'

export const ContactFormSettings: GlobalConfig = {
  slug: 'contact-form-settings',
  label: 'Contact Form Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Main Title',
      type: 'text',
      required: true,
      defaultValue: 'Have A Project? Let\'s Get In Touch With Us!',
      admin: {
        description: 'The main heading displayed at the top of the contact section',
      },
    },

    // Info Cards Section
    {
      name: 'infoCards',
      label: 'Info Cards',
      type: 'array',
      admin: {
        description: 'Information cards displayed on the left side (e.g., address, phone, email)',
        initCollapsed: true,
        components: {
          RowLabel: '@/components/ContactFormSettings/InfoCardRowLabel#InfoCardRowLabel',
        },
      },
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          required: true,
          options: iconOptions,
          defaultValue: 'FaLocationDot',
        },
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        {
          icon: 'FaLocationDot',
          heading: 'Headquarter USA Address',
          description: '800 Maine Avenue SW. Suite 200 Washington DC 20024',
        },
        {
          icon: 'FaPhoneAlt',
          heading: 'Contact Us',
          description: '1.866.780.1655',
        },
        {
          icon: 'FaLocationDot',
          heading: 'UK Address',
          description: 'Amadeus House, Floral Street London WC2E 9DP',
        },
        {
          icon: 'FaEnvelope',
          heading: 'Email',
          description: 'sales@wilsoncgrp.com',
        },
      ],
    },

    // reCAPTCHA Configuration (Protected)
    {
      name: 'recaptcha',
      type: 'group',
      label: 'Google reCAPTCHA Configuration',
      admin: {
        description:
          'Configure Google reCAPTCHA v3 to protect your contact form from spam and bots. Get your keys from https://www.google.com/recaptcha/admin',
      },
      access: {
        read: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable reCAPTCHA Protection',
          defaultValue: true,
          admin: {
            description: 'Toggle to enable/disable reCAPTCHA verification for form submissions',
          },
        },
        {
          name: 'siteKey',
          type: 'text',
          label: 'reCAPTCHA Site Key',
          required: false,
          admin: {
            description: 'Public site key for reCAPTCHA v3 (visible in frontend)',
            condition: (_, siblingData) => siblingData?.enabled,
            placeholder: '6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxE',
          },
        },
        {
          name: 'secretKey',
          type: 'text',
          label: 'reCAPTCHA Secret Key',
          required: false,
          admin: {
            description: 'Secret key for server-side verification (kept private)',
            condition: (_, siblingData) => siblingData?.enabled,
            placeholder: '6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxE',
            components: {
              Field: '@/components/PasswordField',
            },
          },
        },
        {
          name: 'scoreThreshold',
          type: 'number',
          label: 'Score Threshold',
          defaultValue: 0.5,
          min: 0,
          max: 1,
          admin: {
            description:
              'Minimum score required to pass (0.0 = likely bot, 1.0 = likely human). Recommended: 0.5',
            condition: (_, siblingData) => siblingData?.enabled,
            step: 0.1,
          },
        },
      ],
    },

    // SMTP Configuration (Protected)
    {
      name: 'smtp',
      type: 'group',
      label: 'SMTP Email Configuration',
      admin: {
        description:
          'Configure email server settings for form submissions. These credentials are encrypted and secured.',
      },
      access: {
        read: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Email Notifications',
          defaultValue: false,
          admin: {
            description: 'Toggle to enable/disable email notifications for form submissions',
          },
        },
        {
          name: 'host',
          type: 'text',
          label: 'SMTP Host',
          required: false,
          admin: {
            description: 'e.g., smtp.gmail.com, smtp.sendgrid.net',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'port',
          type: 'number',
          label: 'SMTP Port',
          required: false,
          defaultValue: 587,
          admin: {
            description: 'Common ports: 587 (TLS), 465 (SSL), 25',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'secure',
          type: 'checkbox',
          label: 'Use SSL/TLS',
          defaultValue: true,
          admin: {
            description: 'Enable for port 465, disable for port 587',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'username',
          type: 'text',
          label: 'SMTP Username',
          required: false,
          admin: {
            description: 'Usually your email address',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'password',
          type: 'text',
          label: 'SMTP Password',
          required: false,
          admin: {
            description: 'Your email password or app-specific password',
            condition: (_, siblingData) => siblingData?.enabled,
            components: {
              Field: '@/components/PasswordField',
            },
          },
        },
        {
          name: 'fromEmail',
          type: 'email',
          label: 'From Email Address',
          required: false,
          admin: {
            description: 'Email address that will appear as sender',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'fromName',
          type: 'text',
          label: 'From Name',
          defaultValue: 'Contact Form',
          admin: {
            description: 'Name that will appear as sender',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'recipientEmail',
          type: 'email',
          label: 'Recipient Email',
          required: false,
          admin: {
            description: 'Where form submissions will be sent',
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
      ],
    },

    // Form Fields Builder
    {
      name: 'formFields',
      label: 'Form Fields',
      type: 'array',
      admin: {
        description: 'Build your custom contact form fields',
        initCollapsed: true,
        components: {
          RowLabel: '@/components/ContactFormSettings/FormFieldRowLabel#FormFieldRowLabel',
        },
      },
      fields: [
        {
          name: 'fieldType',
          label: 'Field Type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text Input', value: 'text' },
            { label: 'Email Input', value: 'email' },
            { label: 'Phone Input', value: 'tel' },
            { label: 'Number Input', value: 'number' },
            { label: 'Textarea', value: 'textarea' },
          ],
          defaultValue: 'text',
        },
        {
          name: 'name',
          label: 'Field Name (ID)',
          type: 'text',
          required: true,
          admin: {
            description: 'Unique identifier for this field (no spaces, use lowercase)',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'placeholder',
          label: 'Placeholder Text',
          type: 'text',
          required: false,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          required: false,
          options: iconOptions,
        },
        {
          name: 'width',
          label: 'Field Width',
          type: 'select',
          required: true,
          options: [
            { label: 'Full Width', value: 'full' },
            { label: 'Half Width', value: 'half' },
            { label: 'Third Width', value: 'third' },
          ],
          defaultValue: 'full',
        },
        {
          name: 'required',
          label: 'Required Field',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'rows',
          label: 'Textarea Rows',
          type: 'number',
          defaultValue: 5,
          admin: {
            condition: (_, siblingData) => siblingData?.fieldType === 'textarea',
            description: 'Number of visible text lines for textarea',
          },
        },
      ],
      defaultValue: [
        {
          fieldType: 'text',
          name: 'name',
          label: 'Name',
          placeholder: 'Your Name',
          icon: 'FaRegSmile',
          width: 'full',
          required: true,
        },
        {
          fieldType: 'email',
          name: 'email',
          label: 'Email',
          placeholder: 'Your Email',
          icon: 'FaEnvelope',
          width: 'full',
          required: true,
        },
        {
          fieldType: 'textarea',
          name: 'message',
          label: 'Message',
          placeholder: 'Your Message',
          width: 'full',
          required: true,
          rows: 5,
        },
      ],
    },

    // Privacy Policy Configuration
    {
      name: 'privacyPolicy',
      type: 'group',
      label: 'Privacy Policy',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Privacy Policy Checkbox',
          defaultValue: true,
          admin: {
            description: 'Require users to agree to privacy policy before submitting',
          },
        },
        {
          name: 'text',
          type: 'text',
          label: 'Checkbox Text',
          defaultValue: 'I agree to Privacy Policy and Terms of Use',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'privacyLink',
          type: 'text',
          label: 'Privacy Policy Link',
          defaultValue: '/privacy-policy',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
            description: 'URL to your privacy policy page',
          },
        },
      ],
    },

    // Submit Button Configuration
    {
      name: 'submitButton',
      type: 'group',
      label: 'Submit Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Contact With Us Now',
          required: true,
        },
      ],
    },
  ],
}
