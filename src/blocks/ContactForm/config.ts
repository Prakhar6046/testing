import { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contact-form-static',
  labels: { singular: 'Contact Form (Static)', plural: 'Contact Forms (Static)' },
  fields: [
    {
      name: 'contentNote',
      type: 'text',
      admin: {
        readOnly: true,
        description:
          'This block displays the contact form the "Contact Form" global. To manage the actual content, go to Globals → Contact / Newsletter Settings',
      },
    },
  ],
}
