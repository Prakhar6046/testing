import { Block } from 'payload'

export const Soc3BlockConfig: Block = {
  slug: 'soc3_block_config',
  labels: {
    singular: 'SOC 3 Block',
    plural: 'SOC 3 Blocks',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      required: true,
      defaultValue: 'System and Organization Controls 3 Audit (SOC 3)',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'The SOC 3 audit, on the other hand, is a general-use, summary report that follows the same overall process as SOC 2. It provides the highest level of certification and declaration of operational excellence that a data center can receive. This report consists of only an auditor’s opinion, management assertion, and a brief narrative providing background on the service organization.',
    },
    {
      name: 'additionalDescription',
      type: 'textarea',
      defaultValue:
        'It determines whether the service organization maintains effective controls over its systems and is typically intended for users who do not require a more thorough report, which includes a detailed description of the design of controls or tests performed by the service auditor.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'componentsHeading',
      type: 'text',
      required: true,
      defaultValue: 'Components of a SOC 3 audit',
    },
    {
      name: 'components',
      type: 'array',
      label: 'Components',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'linkText',
      type: 'text',
      required: true,
      defaultValue: 'Read More',
    },
    {
      name: 'linkUrl',
      type: 'text',
      required: true,
      defaultValue: '#',
    },
  ],
}
