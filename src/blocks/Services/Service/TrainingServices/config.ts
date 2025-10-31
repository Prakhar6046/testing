import { Block } from 'payload'

export const WCGTrainingServices: Block = {
  slug: 'wcg-training-services',
  labels: {
    singular: 'WCG Training Services',
    plural: 'WCG Training Services',
  },
  interfaceName: 'WCGTrainingServicesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'Training services WCG offers',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Introduction Description',
      required: true,
      defaultValue:
        'WCG offers many professional training and development services to organizations and agencies that need to optimize their network security and help their employees maintain great cybersecurity hygiene. The development training courses are designed to meet industry standards for IT professionals. Participants can obtain skills in several key business areas and technologies. The training services we offer include, but are not limited to:',
    },
    {
      name: 'training-services',
      type: 'array',
      label: 'Training Services List',
      required: true,
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        { service: 'Security Awareness Training and Education' },
        { service: 'Secure Network Design' },
        { service: 'Secure Application Development' },
        { service: 'Secure Customized Training' },
        { service: 'Fundamentals Training' },
      ],
      fields: [
        {
          name: 'service',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter training service name...',
          },
        },
      ],
    },
    {
      name: 'how-section-title',
      type: 'text',
      label: 'How Section Title',
      required: false,
      defaultValue: 'How',
    },
    {
      name: 'how-description',
      type: 'array',
      label: 'How Description Paragraphs',
      required: false,
      minRows: 1,
      maxRows: 5,
      defaultValue: [
        {
          paragraph:
            'WCG addresses the human element of cybersecurity by providing a security awareness program and continuous training service to help employees safely utilize information technology.',
        },
        {
          paragraph:
            'Through our training and development services, employees will understand and apply corporate security policies and procedures and become aware of their personal responsibilities for maintaining good physical, operational, and logical cybersecurity.',
        },
      ],
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          admin: {
            placeholder: 'Enter a paragraph describing your approach...',
          },
        },
      ],
    },
    {
      name: 'background-image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: false,
    },
  ],
}
