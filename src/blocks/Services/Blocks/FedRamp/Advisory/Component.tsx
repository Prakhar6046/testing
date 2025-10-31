'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

type ListItem = {
  text: string
  icon?: Media
}

type FedRampAdvisoryProps = {
  subtitle: string
  title: string
  description: string
  image: Media
  listItems: ListItem[]
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
  },
}

const FedRampAdvisory = ({
  subtitle,
  title,
  description,
  image,
  listItems,
}: FedRampAdvisoryProps) => {
  return (
    <div className="container mx-auto md:px-5 px-4 mb-6">
      <div className="flex flex-col lg:grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-14 mt-8 sm:mt-14 lg:mt-20">
        {/* Image with Motion */}
        <motion.div
          className="lg:col-span-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Image
            src={image?.url || '/new-images/consulting-assistance.svg'}
            width={590}
            height={365}
            alt={title}
            className="rounded-[14px] object-cover w-9/12 sm:w-1/2 lg:w-full lg:mx-auto h-full"
          />
        </motion.div>

        {/* Text Content */}
        <div className="lg:col-span-8 my-auto">
          <h3 className="text-(--secondary) uppercase tracking-widest text-sm sm:text-base">
            {subtitle}
          </h3>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
            {title}
          </h2>

          <p>{description}</p>
        </div>

        {/* Services List */}
        <div className="col-span-12">
          <p className="font-bold text-lg sm:text-xl mb-3">
            We also provide the following as part of our FedRAMP Consulting Services:
          </p>

          <ul className="flex flex-col gap-3 mt-5">
            {listItems?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                {item.icon ? (
                  <Image
                    src={item.icon.url || ''}
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                ) : (
                  <Image
                    src="/images/Blue_checkicon.svg"
                    width={22}
                    height={22}
                    alt="Check Circle"
                    className="mt-[1px]"
                  />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FedRampAdvisory
