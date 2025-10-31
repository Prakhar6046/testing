'use client'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ReadinessAssessmentProps = {
  items: {
    icon: Media
    width: number
    height: number
    alt: string
    text: string
  }[]
  subtitle: string
  title: string
  paragraphs: { text: string }[]
}
type ReadinessAssessmentProp = ReadinessAssessmentProps

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

const ReadinessAssessmentSection = ({
  items,
  subtitle,
  title,
  paragraphs,
}: ReadinessAssessmentProp) => {
  return (
    <div className="bg-(--background)">
      <div className="container mx-auto px-4 py-8 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
          {/* List items */}
          <motion.div
            className="flex flex-col justify-center gap-5 md:order-1 order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-5 bg-white rounded-lg p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.06)]"
                variants={itemVariants} // <- child only uses variants
              >
                <div className="size-8">
                  <Image src={item.icon?.url || ''} width={item.width} height={item.height} alt={item.alt} />
                </div>
                <h4 className="font-medium text-xl">{item.text}</h4>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="my-auto order-1 md:order-2"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-(--secondary) uppercase tracking-widest text-sm sm:text-base">{subtitle}</h3>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">{title}</h2>
            {paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                {para.text}
              </motion.p>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default ReadinessAssessmentSection
