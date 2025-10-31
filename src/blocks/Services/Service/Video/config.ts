import type { Block } from 'payload'

export const ServiceVideo: Block = {
  slug: 'service-video',
  labels: {
    singular: 'Service Video (Service)',
    plural: 'Service Video (Service)',
  },
  fields: [
    // Section Heading
    {
      name: 'heading',
      type: 'group',
      label: 'Section Heading',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Heading Text',
          required: true,
          defaultValue: 'Watch Our Video',
          admin: {
            description: 'Main section heading',
          },
        },
      ],
    },

    // Video ID for anchor linking
    {
      name: 'videoId',
      type: 'text',
      label: 'Video Section ID',
      required: false,
      admin: {
        description: 'Unique ID for this video section (used for anchor linking from hero). Leave empty to auto-generate.',
        placeholder: 'video-section-1',
      },
    },

    // Video Type Selection
    {
      name: 'videoType',
      type: 'select',
      label: 'Video Type',
      required: true,
      defaultValue: 'youtube',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Uploaded Media', value: 'media' },
      ],
      admin: {
        description: 'Choose how to display the video',
      },
    },

    // YouTube URL (conditional)
    {
      name: 'youtubeUrl',
      type: 'text',
      label: 'YouTube URL',
      required: false,
      admin: {
        description: 'Full YouTube URL (e.g., https://www.youtube.com/watch?v=xxxxx or https://youtu.be/xxxxx)',
        condition: (data, siblingData) => siblingData?.videoType === 'youtube',
      },
    },

    // Media Upload (conditional)
    {
      name: 'videoMedia',
      type: 'upload',
      relationTo: 'media',
      label: 'Video File',
      required: false,
      admin: {
        description: 'Upload a video file (MP4, WebM, etc.)',
        condition: (data, siblingData) => siblingData?.videoType === 'media',
      },
    },

    // Content Section
    {
      name: 'content',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Content Paragraphs',
          minRows: 0,
          admin: {
            description: 'Add content paragraphs below the video (optional)',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              required: true,
              admin: {
                description: 'Content paragraph',
              },
            },
          ],
        },
      ],
    },
  ],
}
