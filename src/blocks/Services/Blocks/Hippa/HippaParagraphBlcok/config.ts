import { Block } from 'payload'

export const HipaaParagraphBlockConfig: Block = {
  slug: 'hipaa_paragraph_block',
  labels: {
    singular: 'HIPAA Paragraph Block',
    plural: 'HIPAA Paragraph Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
      defaultValue: `These HIPAA Compliance Services help organizations within the healthcare industry to
      design, restructure, and/or implement the necessary safeguards to ensure the
      confidentiality, integrity, and security of electronically protected health information,
      thereby satisfying the Security Rule and ensuring their HIPAA compliance.`,
    },
  ],
}
