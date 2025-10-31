import React, { Fragment } from 'react'

import type { Page, CaseStudy, Service } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import HeroSection from '@/blocks/HeroHome/Component'
import HeroServices from '@/blocks/Services/HeroServices/Component'
import HeroService from '@/blocks/Services/Service/Hero/Component'
import ServiceAbout from '@/blocks/Services/Service/About/Component'
import ServiceVideo from '@/blocks/Services/Service/Video/Component'
import OurServices from './Home/OurServices/Component'
import Industries from './Home/Industries/Component'
import Portfolio from './Home/Portfolio/Component'
import CaseStudies from './Home/CaseStudies/Component'
import FeaturedBlogs from './Home/Blogs/Component'
import ServicesTabs from './Services/OurServices/Component'
import ContactFormBlock from './Contact/Component'
import ContactFormBlockOLD from './ContactForm/Component'
import CareerTabsBlock from './CareersBlocks/CareerTabs/Component'
import CompanyContentBlock from './CareersBlocks/CompanyContent/Component'
import ImageTextSectionBlock from './CareersBlocks/ImageTextSection/Component'
import JobListingsBlock from './CareersBlocks/JobListings/Component'
import SimpleInformationBlock from './CareersBlocks/SimpleInformation/Component'
import CompanyHeroBlock from './CompanyBlocks/CompanyHero/Component'
import ITExpertsBlock from './CompanyBlocks/ITExperts/Component'
import MissionVisionBlock from './CompanyBlocks/MissionVision/Component'
import LeadershipPointsBlock from './CompanyBlocks/LeadershipPoints/Component'
import TestimonialSliderBlock from './CompanyBlocks/TestimonialSlider/Component'
import Resources from './ResourceCenter/Resources/Component'
import InfoTabs from './ResourceCenter/InfoTabs/Component'
import ExtraInfoBlock from './ResourceCenter/ExtraInfo/Component'
import EbooksBlock from './ResourceCenter/Ebooks/Component'
import VideoTabsBlock from './ResourceCenter/VideoTabs/Component'
import CaseStudyHeroBlock from './CaseStudy/Hero/Component'
import CaseStudyContentBlock from './CaseStudy/Content/Component'
import ExperienceSection from './ExperienceSection/Component'
import HelpYou from './Services/Service/HelpYou/Component'
import WhyWCG from './Services/Service/WhyWCG/Component'
import FAQ from './Services/Service/FAQ/Component'
import ServicesRecommendations from './Services/Service/ServicesRecommendations/Component'
import ServiceOverview from './Services/Blocks/ServiceOverview/Component'
import { HelpYouV2 } from './Services/Service/HelpYouV2/Component'
import ServiceAbout2 from './Services/Service/AboutV2/Component'
import { HelpYouVideo } from './Services/Service/HelpYouVideo/Component'
import PeneterationTesting from './Services/Service/PeneterationTesting/Component'
import WCGHelpList from './Services/Service/WCGHelpList/Component'
import WCGTrainingServices from './Services/Service/TrainingServices/Component'
import { SearchBlock } from './SearchBlock/Component'
import FedRampAdvisory from './Services/Blocks/FedRamp/Advisory/Component'
import ReadinessAssessmentSection from './Services/Blocks/FedRamp/Assessment/Component'
import AuthorizationMonitoringSection from './Services/Blocks/FedRamp/Authorization/Component'
import CmmcWhyUs from './Services/Blocks/CMMC/CmmcWhyUs/Component'
import ServicesOverviewBlock from './Services/Blocks/CMMC/ServicesOverview/Component'
import AnimatedTimelineBlock from './Services/Blocks/CMMC/AnimatedTimeline/Component'
import ComplianceCheckBlock from './Services/Blocks/CMMC/ComplianceCheck/Component'
import CmccTimelineBlock from './Services/Blocks/CMMC/Timeline/Component'
import FismaHowToBlock from './Services/Blocks/Fisma/HowToBecome/Component'
import FismaComplianceBlock from './Services/Blocks/Fisma/FismaComplianceHeader/Component'
import GlbaComplianceBlock from './Services/Blocks/Glba/GLBACompliance/Component'
import GlbaServicesBlock from './Services/Blocks/Glba/GLBAServicesSection/Component'
import GlbaPenaltiesBlock from './Services/Blocks/Glba/GLBAPenalties/Component'
import { HipaaCardsBlock } from './Services/Blocks/Hippa/SwiperCompiance/Component'
import { HipaaParagraphBlock } from './Services/Blocks/Hippa/HippaParagraphBlcok/Component'
import { Soc2Block } from './Services/Blocks/SOC/SOCAudit2/Component'
import { Soc3Block } from './Services/Blocks/SOC/SOCAudit3/Component'
import GdprIntroBlock from './Services/Blocks/GdprIntro/Component'
import GdprPrinciplesBlock from './Services/Blocks/GdprPriciples/Component'
import WhoNeedsToComplyBlock from './Services/Blocks/california-consumer-privacy-act-ccpa-compliance/WhoNeedsToComply/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  'hero-home': HeroSection,
  'hero-services': HeroServices,
  'hero-service': HeroService,
  'service-about': ServiceAbout,
  'service-video': ServiceVideo,
  'our-services': OurServices,
  industries: Industries,
  portfolio: Portfolio,
  'case-studies': CaseStudies,
  'featured-blogs': FeaturedBlogs,
  srv: ServicesTabs,
  contact: ContactFormBlock,
  'contact-form-static': ContactFormBlockOLD,
  'career-tabs': CareerTabsBlock,
  'co-content': CompanyContentBlock,
  'image-text-section': ImageTextSectionBlock,
  'job-listings': JobListingsBlock,
  info: SimpleInformationBlock,
  'co-hero': CompanyHeroBlock,
  'it-experts': ITExpertsBlock,
  'mission-vision': MissionVisionBlock,
  'leadership-points': LeadershipPointsBlock,
  testimonials: TestimonialSliderBlock,
  resources: Resources,
  'info-tabs': InfoTabs,
  'extra-info': ExtraInfoBlock,
  ebooks: EbooksBlock,
  'video-tabs': VideoTabsBlock,
  'case-study-hero': CaseStudyHeroBlock,
  'case-study-cn': CaseStudyContentBlock,
  'experience-section': ExperienceSection,
  'help-you-section': HelpYou,
  'why-wcg-section': WhyWCG,
  'faq-section': FAQ,
  'services-more': ServicesRecommendations,
  servicesOverview: ServiceOverview,
  'help-you-v2': HelpYouV2,
  'service-about-2': ServiceAbout2,
  'help-you-video': HelpYouVideo,
  'penetration-testing': PeneterationTesting,
  'wcg-help-list': WCGHelpList,
  'wcg-training-services': WCGTrainingServices,
  'search-block': SearchBlock,

  fedramp_advisory: FedRampAdvisory,
  readiness_assessment_section: ReadinessAssessmentSection,
  fedramp_auth: AuthorizationMonitoringSection,

  // CMMC Blocks
  cmmc_why_us: CmmcWhyUs,
  services_overview: ServicesOverviewBlock,
  // animated_timeline: AnimatedTimelineBlock,
  compliance_check: ComplianceCheckBlock,
  cmcc_timeline: CmccTimelineBlock,

  // FISMA Blocks
  fisma_how_to: FismaHowToBlock,
  fisma_compliance: FismaComplianceBlock,

  // GLBA Blocks
  glba_compliance: GlbaComplianceBlock,
  glba_services: GlbaServicesBlock,
  glba_penalties: GlbaPenaltiesBlock,

  // HIPAA Blocks
  hipaa_block: HipaaCardsBlock,
  hipaa_paragraph_block: HipaaParagraphBlock,

  // SOC Blocks
  soc2_block: Soc2Block,
  soc3_block_config: Soc3Block,

  // GDPR Blocks
  gdpr_intro: GdprIntroBlock,
  gdpr_principles: GdprPrinciplesBlock,

  // CCPA Blocks
  who_needs_to_comply: WhoNeedsToComplyBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0] | Service['layout'][0][]
  pageData?: CaseStudy
}> = (props) => {
  const { blocks, pageData } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer pageData={pageData} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
