import { Archive } from '@/blocks/ArchiveBlock/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { FormBlock } from '@/blocks/Form/config'
import { HeroHome } from '@/blocks/HeroHome/config'
import { FeaturedBlogs } from '@/blocks/Home/Blogs/config'
import { CaseStudies } from '@/blocks/Home/CaseStudies/config'
import { Industries } from '@/blocks/Home/Industries/config'
import { OurServices } from '@/blocks/Home/OurServices/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { HeroServices } from '@/blocks/Services/HeroServices/config'
import { HeroService } from '@/blocks/Services/Service/Hero/config'
import { ServiceAbout } from '@/blocks/Services/Service/About/config'
import { ServiceVideo } from '@/blocks/Services/Service/Video/config'
import { Contact } from '@/blocks/Contact/config'
import { CareerTabs } from '@/blocks/CareersBlocks/CareerTabs/config'
import { CompanyContent } from '@/blocks/CareersBlocks/CompanyContent/config'
import { ImageTextSection } from '@/blocks/CareersBlocks/ImageTextSection/config'
import { JobListings } from '@/blocks/CareersBlocks/JobListings/config'
import { SimpleInformation } from '@/blocks/CareersBlocks/SimpleInformation/config'
import { CompanyHero } from '@/blocks/CompanyBlocks/CompanyHero/config'
import { ITExperts } from '@/blocks/CompanyBlocks/ITExperts/config'
import { MissionVision } from '@/blocks/CompanyBlocks/MissionVision/config'
import { LeadershipPoints } from '@/blocks/CompanyBlocks/LeadershipPoints/config'
import { TestimonialSlider } from '@/blocks/CompanyBlocks/TestimonialSlider/config'
import { Block } from 'payload'
import { Portfolio } from '@/blocks/Home/Portfolio/config'
import { ServicesTabs } from '@/blocks/Services/OurServices/config'
import { Resources } from '@/blocks/ResourceCenter/Resources/config'
import { InfoTabs } from '@/blocks/ResourceCenter/InfoTabs/config'
import { ExtraInfo } from '@/blocks/ResourceCenter/ExtraInfo/config'
import { Ebooks } from '@/blocks/ResourceCenter/Ebooks/config'
import { VideoTabs } from '@/blocks/ResourceCenter/VideoTabs/config'
import { CaseStudyHero } from '@/blocks/CaseStudy/Hero/config'
import { CaseStudyContent } from '@/blocks/CaseStudy/Content/config'
import { ExperienceSection } from '@/blocks/ExperienceSection/config'
import { HelpYou } from '@/blocks/Services/Service/HelpYou/config'
import { HelpYouV2 } from '@/blocks/Services/Service/HelpYouV2/config'
import { WhyWCG } from '@/blocks/Services/Service/WhyWCG/config'
import { FAQ } from '@/blocks/Services/Service/FAQ/config'
import { ServicesRecommendations } from '@/blocks/Services/Service/ServicesRecommendations/confg'
import { ServiceOverview } from '@/blocks/Services/Blocks/ServiceOverview/config'
import { ServiceAbout2 } from '@/blocks/Services/Service/AboutV2/config'
import { HelpYouVideo } from '@/blocks/Services/Service/HelpYouVideo/config'
import { PenetrationTesting } from '@/blocks/Services/Service/PeneterationTesting/config'
import { WCGHelpList } from '@/blocks/Services/Service/WCGHelpList/config'
import { WCGTrainingServices } from '@/blocks/Services/Service/TrainingServices/config'
import { ContactForm } from '@/blocks/ContactForm/config'
import FedRampAdvisory from '@/blocks/Services/Blocks/FedRamp/Advisory/config'
import ReadinessAssessmentSection from '@/blocks/Services/Blocks/FedRamp/Assessment/config'
import AuthorizationMonitoringSection from '@/blocks/Services/Blocks/FedRamp/Authorization/config'
import { CmmcConsultingConfig } from '@/blocks/Services/Blocks/CMMC/CmmcWhyUs/config'
import { ServicesOverviewConfig } from '@/blocks/Services/Blocks/CMMC/ServicesOverview/config'
import { AnimatedTimelineConfig } from '@/blocks/Services/Blocks/CMMC/AnimatedTimeline/config'
import { ComplianceCheckConfig } from '@/blocks/Services/Blocks/CMMC/ComplianceCheck/config'
import { CmccTimelineConfig } from '@/blocks/Services/Blocks/CMMC/Timeline/config'
import FISMABecomeSectionConfig from '@/blocks/Services/Blocks/Fisma/HowToBecome/config'
import { FISMAComplianceSectionConfig } from '@/blocks/Services/Blocks/Fisma/FismaComplianceHeader/config'
import GLBAComplianceSectionConfig from '@/blocks/Services/Blocks/Glba/GLBACompliance/config'
import { GlbaServicesConfig } from '@/blocks/Services/Blocks/Glba/GLBAServicesSection/config'
import GLBAPenaltiesSectionConfig from '@/blocks/Services/Blocks/Glba/GLBAPenalties/config'
import { HipaaCardsBlockConfig } from '@/blocks/Services/Blocks/Hippa/SwiperCompiance/config'
import { HipaaParagraphBlockConfig } from '@/blocks/Services/Blocks/Hippa/HippaParagraphBlcok/config'
import { Soc2BlockConfig } from '@/blocks/Services/Blocks/SOC/SOCAudit2/config'
import { Soc3BlockConfig } from '@/blocks/Services/Blocks/SOC/SOCAudit3/config'
import { gdprIntro } from '@/blocks/Services/Blocks/GdprIntro/config'
import { gdprPrinciples } from '@/blocks/Services/Blocks/GdprPriciples/config'
import { WhoNeedsToComply } from '@/blocks/Services/Blocks/california-consumer-privacy-act-ccpa-compliance/WhoNeedsToComply/config'

export const GlobalBlocks: Block[] = [
  HeroHome,
  HeroServices,
  HeroService,
  ServiceAbout,
  CallToAction,
  Content,
  MediaBlock,
  Archive,
  FormBlock,
  OurServices,
  Industries,
  Portfolio,
  CaseStudies,
  FeaturedBlogs,
  ServicesTabs,
  Contact,
  ContactForm,
  CareerTabs,
  CompanyContent,
  ImageTextSection,
  JobListings,
  SimpleInformation,
  CompanyHero,
  ITExperts,
  MissionVision,
  LeadershipPoints,
  TestimonialSlider,
  Resources,
  InfoTabs,
  ExtraInfo,
  Ebooks,
  VideoTabs,
  CaseStudyHero,
  CaseStudyContent,
  ExperienceSection,
  HelpYou,
  WhyWCG,
  FAQ,
  ServicesRecommendations,
  ServiceOverview,
  FedRampAdvisory,
  ReadinessAssessmentSection,
  AuthorizationMonitoringSection,

  // CMMC Blocks
  CmmcConsultingConfig,
  ServicesOverviewConfig,
  // AnimatedTimelineConfig,
  ComplianceCheckConfig,
  CmccTimelineConfig,

  // FISMA Blocks
  FISMABecomeSectionConfig,
  FISMAComplianceSectionConfig,

  // GLBA Blocks
  GLBAComplianceSectionConfig,
  GlbaServicesConfig,
  GLBAPenaltiesSectionConfig,

  // HIPAA Blocks
  HipaaCardsBlockConfig,
  HipaaParagraphBlockConfig,

  // SOC Blocks
  Soc2BlockConfig,
  Soc3BlockConfig,

  // GDPR Blocks
  gdprIntro,
  gdprPrinciples,

  // CCPA Blocks
  WhoNeedsToComply,

  ServiceVideo,
]

// Service-specific blocks array that includes HelpYouV2
export const ServiceBlocks: Block[] = [
  ...GlobalBlocks,
  HelpYouV2,
  ServiceAbout2,
  HelpYouVideo,
  PenetrationTesting,
  WCGHelpList,
  WCGTrainingServices,
]
