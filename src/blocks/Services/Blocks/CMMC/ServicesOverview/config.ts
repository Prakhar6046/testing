import { Block } from 'payload'

export const ServicesOverviewConfig: Block = {
    slug: 'cmmc_svc_ovw',
    labels: {
        singular: 'CMMC Services Overview',
        plural: 'CMMC Services Overviews',
    },
    fields: [
        {
            name: 'leftSectionHeading',
            type: 'text',
            required: true,
            defaultValue: 'How can we help?',
            label: 'Left Section Heading',
        },
        {
            name: 'leftSectionDescription',
            type: 'textarea',
            required: true,
            defaultValue: 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
            label: 'Left Section Description',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
            label: 'Background Image (optional)',
        },
        {
            name: 'consultingHeading',
            type: 'text',
            required: true,
            defaultValue: 'CMMC Consulting',
            label: 'Consulting Section Heading',
        },
        {
            name: 'consultingSubheading',
            type: 'text',
            required: true,
            defaultValue: 'WCG provides',
            label: 'Consulting Section Subheading',
        },
        {
            name: 'consultingServices',
            type: 'array',
            label: 'Consulting Services',
            labels: {
                singular: 'Service Item',
                plural: 'Service Items',
            },
            fields: [
                {
                    name: 'service',
                    type: 'text',
                    required: true,
                    label: 'Service Description',
                },
            ],
            defaultValue: [
                { service: 'a top-down assessment and gap analysis of your organization\'s cybersecurity posture,' },
                { service: 'identification of the CMMC scope to help your organization align with CMMC controls, and' },
                { service: 'a comprehensive readiness assessment report with concise and clear recommendations' },
            ],
        },
        {
            name: 'remediationHeading',
            type: 'text',
            required: true,
            defaultValue: 'CMMC Remediation',
            label: 'Remediation Section Heading',
        },
        {
            name: 'remediationSubheading',
            type: 'text',
            required: true,
            defaultValue: 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
            label: 'Remediation Section Subheading',
        },
        {
            name: 'remediationServices',
            type: 'array',
            label: 'Remediation Services',
            labels: {
                singular: 'Service Item',
                plural: 'Service Items',
            },
            fields: [
                {
                    name: 'service',
                    type: 'text',
                    required: true,
                    label: 'Service Description',
                },
            ],
            defaultValue: [
                { service: 'address deficient controls,' },
                { service: 'close the gap on CMMC Compliance, and' },
                { service: 'reach your desired, targeted CMMC-level and become compliant to get CMMC certification.' },
            ],
        },
    ],
}
