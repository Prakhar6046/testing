'use client'
import { Media } from '@/payload-types';
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

type WhyChooseWCGProps = {
  heading: string
  items: { image: Media; alt: string; title: string; description: string }[]
}
type WhyChooseWCGProp = WhyChooseWCGProps

// Variants for the cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 1,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
}

const WhyChooseWCGSection = ({ heading, items }: WhyChooseWCGProp) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
        <div className="text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.2em]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="text-center"
            >
              <Image src={item.image?.url || ""} width={64} height={64} alt={item.alt} />
              <h3 className="font-bold text-xl my-3.5">{item.title}</h3>
              <p>{item.description || ''}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseWCGSection
