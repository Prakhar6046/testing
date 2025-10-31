import { Block } from 'payload'

export const gdprIntro: Block = {
  slug: "gdpr_intro",
  labels: {
    singular: "GDPR Intro",
    plural: "GDPR Intros",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
  ],
};
