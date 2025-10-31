'use client'
import React from 'react'
import { motion, Variants } from 'motion/react'

type Requirement = {
  number: string
  title: string
  description: string
}

type GLBAComplianceSectionProps = {
  heading: string
  subheading: string
  requirements: Requirement[]
}

const cardVariants: Variants = {
  hidden: (custom: number) => {
    const x = custom % 3 === 0 ? -100 : custom % 3 === 2 ? 100 : 0
    const y = custom % 3 === 1 ? 100 : 0
    return { opacity: 0, x, y }
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
}

const GLBAComplianceSection = ({
  heading,
  subheading,
  requirements,
}: GLBAComplianceSectionProps) => {
  return (
    <section className="bg-background md:px-14 py-10 md:py-20">
      <div className="container mx-auto md:px-0 px-4">
        {/* Heading Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="col-span-2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl col-span-2 text-center font-bold">
              {heading}
            </h1>
            <p className="text-xl col-span-2 text-center font-medium">
              {subheading}
            </p>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 mt-16">
          {requirements.map((req, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-7 border-transparent border-t-4 transition-all ease-in-out duration-200 flex flex-col gap-4 hover:border-t-[#00A2E7]"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="py-5 px-6 w-fit rounded-2xl text-2xl font-semibold text-white" style={{ backgroundColor: '#00A2E7' }}>
                {req.number}
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">{req.title}</h1>
                <p className="pb-4 text-lg">{req.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GLBAComplianceSection
