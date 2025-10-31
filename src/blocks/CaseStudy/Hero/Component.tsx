import type { Page, CaseStudy } from '@/payload-types'
import CaseStudyHeroClient from './Component.client'

type CaseStudyHeroProps = Extract<Page['layout'][0], { blockType: 'case-study-hero' }> & {
  pageData?: CaseStudy
}

export const CaseStudyHeroBlock: React.FC<CaseStudyHeroProps> = (props) => {
  return <CaseStudyHeroClient {...props} />
}

export default CaseStudyHeroBlock
