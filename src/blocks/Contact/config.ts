import { Block } from 'payload'

export const Contact: Block = {
  slug: 'contact',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'note',
      type: 'text',
      admin: {
        readOnly: true,
        description:
          'This block displays the dynamic contact form. To manage form fields, info cards, and SMTP settings, go to Globals -> Contact Form Settings',
      },
      defaultValue: 'Content managed in Global Settings',
    },
  ],
}
