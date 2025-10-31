import { Block } from 'payload'

export const ComplianceCheckConfig: Block = {
    slug: 'compliance_check',
    labels: {
        singular: 'CMMC Compliance Check',
        plural: 'CMMC Compliance Checks',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'Are you compliant?',
            label: 'Main Heading',
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
            defaultValue: 'The Cybersecurity Maturity Model Certification (CMMC) is mandatory for all contractors doing business with the DoD at any level. All contractors are required to obtain a CMMC certification. This includes all suppliers at all tiers along the supply chain, small businesses, commercial item contractors and foreign suppliers. No organizations are permitted to receive or share DoD information related to programs & projects without having completed the CMMC Compliance.',
            label: 'Description',
        },
        {
            name: 'importantNote',
            type: 'textarea',
            required: true,
            defaultValue: 'As of October 2020, the CMMC-AB is working through its initial stand up phase and working to meet the requirements of the DoD. So, no contractors are currently CMMC certified.',
            label: 'Important Note',
        },
        {
            name: 'callToAction',
            type: 'text',
            required: true,
            defaultValue: 'Request a FREE Consultation now to get a guide towards successful CMMC Certification.',
            label: 'Call to Action Text',
        },
        {
            name: 'buttonText',
            type: 'text',
            required: true,
            defaultValue: 'Request FREE Consultation',
            label: 'Button Text',
        },
        {
            name: 'buttonLink',
            type: 'text',
            required: true,
            defaultValue: '#contact',
            label: 'Button Link',
        },
        {
            name: 'rightImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
            label: 'Right Side Image',
        },
    ],
}
