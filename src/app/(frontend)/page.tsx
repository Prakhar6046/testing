import PageTemplate, { generateMetadata } from './[slug]/page'

export const dynamic = 'force-dynamic'
export const revalidate = 60 // 1 minute

export default PageTemplate

export { generateMetadata }
