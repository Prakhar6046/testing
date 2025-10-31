import type { Block } from 'payload'

export const SearchBlockConfig: Block = {
  slug: 'search-block',
  interfaceName: 'SearchBlock',
  fields: [
    {
      name: 'enableSearch',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Enable search functionality on this page',
      },
    },
  ],
}
