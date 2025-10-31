import {
  FaPhoneAlt,
  FaEnvelope,
  FaRegSmile,
  FaUser,
  FaBuilding,
  FaGlobe,
  FaClock,
  FaMapMarkerAlt,
  FaComments,
  FaQuestionCircle,
  FaBriefcase,
  FaCalendar,
  FaHome,
  FaMobileAlt,
  FaPaperPlane,
  FaInfoCircle,
  FaLink,
} from 'react-icons/fa'

import { FaLocationDot as FaLocationDot6 } from 'react-icons/fa6'
import { IconType } from 'react-icons'

export type IconName =
  | 'FaLocationDot'
  | 'FaPhoneAlt'
  | 'FaEnvelope'
  | 'FaRegSmile'
  | 'FaUser'
  | 'FaBuilding'
  | 'FaGlobe'
  | 'FaClock'
  | 'FaMapMarkerAlt'
  | 'FaComments'
  | 'FaQuestionCircle'
  | 'FaBriefcase'
  | 'FaCalendar'
  | 'FaHome'
  | 'FaMobileAlt'
  | 'FaPaperPlane'
  | 'FaInfoCircle'
  | 'FaLink'

// Icon mapping object
export const iconMap: Record<IconName, IconType> = {
  FaLocationDot: FaLocationDot6,
  FaPhoneAlt,
  FaEnvelope,
  FaRegSmile,
  FaUser,
  FaBuilding,
  FaGlobe,
  FaClock,
  FaMapMarkerAlt,
  FaComments,
  FaQuestionCircle,
  FaBriefcase,
  FaCalendar,
  FaHome,
  FaMobileAlt,
  FaPaperPlane,
  FaInfoCircle,
  FaLink,
}

// Helper function to get icon component by name
export const getIconComponent = (iconName: IconName | string): IconType | null => {
  return iconMap[iconName as IconName] || null
}

// Icon options for Payload CMS select field
export const iconOptions = [
  { label: 'Location Pin', value: 'FaLocationDot' },
  { label: 'Phone', value: 'FaPhoneAlt' },
  { label: 'Email', value: 'FaEnvelope' },
  { label: 'Smile', value: 'FaRegSmile' },
  { label: 'User', value: 'FaUser' },
  { label: 'Building', value: 'FaBuilding' },
  { label: 'Globe', value: 'FaGlobe' },
  { label: 'Clock', value: 'FaClock' },
  { label: 'Map Marker', value: 'FaMapMarkerAlt' },
  { label: 'Comments', value: 'FaComments' },
  { label: 'Question Circle', value: 'FaQuestionCircle' },
  { label: 'Briefcase', value: 'FaBriefcase' },
  { label: 'Calendar', value: 'FaCalendar' },
  { label: 'Home', value: 'FaHome' },
  { label: 'Mobile', value: 'FaMobileAlt' },
  { label: 'Paper Plane', value: 'FaPaperPlane' },
  { label: 'Info Circle', value: 'FaInfoCircle' },
  { label: 'Link', value: 'FaLink' },
]
