// storage-adapter-import-placeholder

import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { FeaturedResourcesDefaults } from './globals/FeaturedResourcesDefaults/config'
import { ContactFormSettings } from './globals/ContactFormSettings/config'
import { Services } from './collections/Services'
import { CaseStudies } from './collections/CaseStudies'
import { ServicesRecommended } from './globals/ServicesRecommended/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      graphics: {
        Logo: '@/components/Logo',
      },
    },
    theme: 'light',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      // Set statement timeout to 60 seconds (in milliseconds) via connection string options
      ...(process.env.DATABASE_URI && {
        statement_timeout: 60000, // 60 seconds
      }),
    },
    push: process.env.NODE_ENV !== 'production',
  }),
  collections: [Pages, Posts, Media, Categories, Users, Services, CaseStudies],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, FeaturedResourcesDefaults, ContactFormSettings, ServicesRecommended],
  plugins: [
    ...plugins,
    s3Storage({
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) => {
            return [
              `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com`,
              prefix,
              filename,
            ]
              .filter(Boolean)
              .join('/')
          },
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '3c90b209d490c03e18e33b7b',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
