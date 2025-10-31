import { Block } from 'payload'

export const GlbaServicesConfig: Block = {
    slug: 'glba_services',
    dbName: 'glba_services',
    labels: {
        singular: 'GLBA Services Section',
        plural: 'GLBA Services Sections',
    },
    fields: [
        {
            name: 'mainHeading',
            type: 'text',
            required: true,
            defaultValue: 'How will WCG help?',
        },
        {
            name: 'implementationServices',
            type: 'group',
            label: 'Implementation Services',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    defaultValue: 'GLBA Implementation Services',
                },
                {
                    name: 'services',
                    type: 'array',
                    label: 'Services',
                    labels: { singular: 'Service', plural: 'Services' },
                    dbName: 'impl_services',
                    fields: [
                        {
                            name: 'number',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'assessmentServices',
            type: 'group',
            label: 'Assessment Services',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    defaultValue: 'GLBA Assessment Services',
                },
                {
                    name: 'services',
                    type: 'array',
                    label: 'Services',
                    labels: { singular: 'Service', plural: 'Services' },
                    dbName: 'assess_services',
                    fields: [
                        {
                            name: 'number',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
}
