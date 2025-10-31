import { Block } from 'payload'

export const AnimatedTimelineConfig: Block = {
    slug: 'animated_timeline',
    labels: {
        singular: 'Animated Timeline',
        plural: 'Animated Timelines',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'CMMC Timeline',
        },
        {
            name: 'autoPlay',
            type: 'checkbox',
            label: 'Enable Auto Play',
            defaultValue: true,
        },
        {
            name: 'autoPlayInterval',
            type: 'number',
            label: 'Auto Play Interval (milliseconds)',
            defaultValue: 3000,
            min: 1000,
            max: 10000,
            admin: {
                condition: (data) => data.autoPlay === true,
            },
        },
        {
            name: 'timelineItems',
            type: 'array',
            label: 'Timeline Items',
            labels: { singular: 'Timeline Item', plural: 'Timeline Items' },
            fields: [
                {
                    name: 'year',
                    type: 'text',
                    required: true,
                    label: 'Year',
                },
                {
                    name: 'phase',
                    type: 'text',
                    required: true,
                    label: 'Phase (e.g., "October 2019 - Phase 01")',
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    label: 'Title',
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    label: 'Description',
                },
                {
                    name: 'icon',
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                    label: 'Icon (optional - will show default if not provided)',
                },
            ],
        },
    ],
}
