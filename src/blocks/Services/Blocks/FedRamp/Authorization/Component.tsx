'use client'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

type AuthorizationMonitoringProps = {
  authorization: {
    subtitle: string
    title: string
    paragraphs: { text: string; bold?: boolean }[]
    listItems: { text: string; icon?: Media }[]
    image: Media
  }
  monitoring: {
    subtitle: string
    title: string
    description: string
    listItems: { text: string; icon?: Media }[]
    image: Media
  }
}

// Image animation variants (diagonal slide + zoom)
const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: -50, scale: 0.8 }, // diagonal + zoom out
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
  },
}

// Text animation variants (slide in + fade)
const textVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] } },
}

const AuthorizationMonitoringSection = ({
  authorization,
  monitoring,
}: AuthorizationMonitoringProps) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
      {/* Authorization Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
        {/* Text */}
        <motion.div
          className="my-auto order-2 md:order-1"
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={textVariants}
        >
          <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
            {authorization.subtitle}
          </h3>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
            {authorization.title}
          </h2>

          {authorization.paragraphs.map((para, idx) => (
            <p key={idx} className={para.bold ? 'font-bold text-lg sm:text-xl my-3' : ''}>
              {para.text}
            </p>
          ))}

          <ul className="flex flex-col gap-3 mt-5">
            {authorization.listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Image
                  src={item.icon?.url || ''}
                  width={22}
                  height={22}
                  alt="Check Circle"
                  className="mt-[1px]"
                />
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imageVariants}
        >
          <Image
            src={authorization.image?.url || ''}
            width={590}
            height={365}
            alt={authorization.title}
            className="rounded-[14px] w-full mx-auto"
          />
        </motion.div>
      </div>

      {/* Continuous Monitoring Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 mt-10 sm:mt-20">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imageVariants}
        >
          <Image
            src={monitoring.image?.url || ''}
            width={590}
            height={365}
            alt={monitoring.title}
            className="rounded-[14px] w-full mx-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="my-auto"
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={textVariants}
        >
          <h3 className="text-(--wils_orang) uppercase tracking-widest text-sm sm:text-base">
            {monitoring.subtitle}
          </h3>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
            {monitoring.title}
          </h2>

          <p className="font-bold text-lg sm:text-xl my-3">{monitoring.description}</p>

          <ul className="flex flex-col gap-3 mt-5">
            {monitoring.listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Image
                  src={item.icon?.url || ''}
                  width={22}
                  height={22}
                  alt="Check Circle"
                  className="mt-[1px]"
                />
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthorizationMonitoringSection
