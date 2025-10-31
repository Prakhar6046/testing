// 'use client'
// import React from 'react'

// type FISMAComplianceSectionProps = {
//   heading: string
//   description: string
//   boldText: string
//   benefits: { text: string }[]   
//   penalties: { text: string }[] 
//   benefitsBgUrl: string
//   penaltiesBgUrl: string
// }

// const FISMAComplianceSection = ({
//   heading,
//   description,
//   boldText,
//   benefits,
//   penalties,
//   benefitsBgUrl,
//   penaltiesBgUrl,
// }: FISMAComplianceSectionProps) => {
//   return (
//     <section className={`bg-background md:px-14 py-10 md:py-20 `}>
//       <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
//         <div className="col-span-2 flex flex-col gap-6 ">
//           <h1 className="text-4xl md:text-6xl col-span-2 text-center font-bold">{heading}</h1>
//           <p className="col-span-2 text-center">{description}</p>
//           <p className="text-xl col-span-2 text-center font-bold">{boldText}</p>
//         </div>

//         <div className="col-span-2 md:col-span-1 flex justify-center items-center my-5 mt-10">
//           <h1 className="text-5xl font-bold text-(--wils_orang)">Key Benefits</h1>
//         </div>
//         <div className="col-span-2 md:col-span-1"></div>

//         <div className="col-span-2 md:col-span-1 bg-[url(/images/fisma/keyBenefits.svg)] h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-center">
//           <ul className="max-w-[245px] ps-5 pt-44 list-none sm:list-disc flex flex-col gap-1.5 sm:text-lg text-base">
//             {benefits.map((item, idx) => (
//               <li key={idx} className="font-medium">
//                 {item.text}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="col-span-2 md:col-span-1 bg-[url(/images/fisma/penalties.svg)] h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-center">
//           <ul className="max-w-[215px] ps-5 pb-64 md:pb-72 list-none sm:list-disc flex flex-col gap-1.5 sm:text-lg text-base">
//             {penalties.map((item, idx) => (
//               <li key={idx} className="font-medium">
//                {item.text}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="col-span-2 md:col-span-1"></div>
//         <div className="col-span-2 md:col-span-1 flex justify-center items-center my-5 mt-10">
//           <h1 className="text-5xl font-bold text-(--foreground)">Penalties</h1>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FISMAComplianceSection



'use client'
import { Media } from "@/payload-types";
import Image from "next/image";
import { motion, Variants } from "motion/react";

type FISMAComplianceSectionProps = {
  heading: string;
  description: string;
  subText: string;
  leftSection: {
    title: string;
    backgroundImage: Media;
    icon: Media;
    items: { text: string; icon?: Media }[]; // updated to include icon per item
  };
  rightSection: {
    title: string;
    backgroundImage: Media;
    icon: Media;
    items: { text: string; icon?: Media }[]; // updated to include icon per item
  };
  footerImage: Media;
};

// Framer Motion Variants
const flagVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -200 },
  hiddenRight: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const listVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const FISMAComplianceSection: React.FC<FISMAComplianceSectionProps> = ({
  heading,
  description,
  subText,
  leftSection,
  rightSection,
  footerImage,
}) => {
  return (
    <section className={`md:px-14 py-10 md:py-20`}>
      <div className="container mx-auto md:px-0 px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="col-span-12 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl col-span-2 text-center font-bold">{heading}</h1>
            <p className="col-span-2 text-center">{description}</p>
            <p className="text-xl col-span-2 text-center font-bold">{subText}</p>
          </div>
        </div>

        <div className="flex flex-col md:grid grid-cols-2 md:gap-8 relative mt-10 md:mt-40 before:md:absolute before:md:h-[calc(100%+100px)] before:md:w-8 before:md:bg-(--light-secondary) before:md:-top-14 before:md:left-1/2 before:md:-translate-x-1/2">
          <div className="hidden md:block absolute rounded-full w-16 h-16 bg-(--light-secondary) -top-20 left-1/2 -translate-1/2"></div>

          {/* LEFT SECTION */}
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true }}
            variants={flagVariants}
          >
            <div
              className="flex justify-center items-center gap-6 py-8 px-4 bg-no-repeat bg-left bg-auto md:bg-cover lg:bg-auto before:bg-[linear-gradient(to_right,white_50%,var(--secondary)_50%)] before:-z-10 before:w-full before:h-full before:absolute before:top-0 before:right-0 relative"
              style={{
                backgroundImage: `url(${leftSection?.backgroundImage?.url || ""})`,
              }}
            >
              <Image
                src={leftSection?.icon?.url || ""}
                alt={leftSection?.icon?.alt || leftSection?.title || "icon"}
                width={179}
                height={209}
                className="w-16 h-16 flex-shrink-0"
              />
              <h3 className="relative text-white text-2xl sm:text-3xl lg:text-[44px] font-bold">
                {leftSection?.title}
              </h3>
            </div>

            <div className="flex flex-col gap-6 mt-10">
              {leftSection?.items?.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listVariants}
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src={item.icon?.url || "/images/check-icon.svg"}
                      alt={item.icon?.alt || "check"}
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-medium text-2xl text-black">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            className="mt-16"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true }}
            variants={flagVariants}
          >
            <div
              className="flex justify-center items-center gap-6 py-8 px-4 bg-no-repeat bg-right before:bg-[linear-gradient(to_left,white_50%,var(--foreground)_50%)] before:-z-10 before:w-full before:h-full before:absolute before:top-0 before:left-0 relative"
              style={{
                backgroundImage: `url(${rightSection?.backgroundImage?.url || ""})`,
              }}
            >
              <h3 className="text-white text-2xl sm:text-3xl lg:text-[44px] font-bold">
                {rightSection?.title}
              </h3>
              <Image
                src={rightSection?.icon?.url || ""}
                alt={rightSection?.icon?.alt || rightSection?.title || "icon"}
                width={179}
                height={209}
                className="w-16 h-16 flex-shrink-0"
              />
            </div>

            <div className="flex flex-col gap-6 mt-10 md:ps-10">
              {rightSection?.items?.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listVariants}
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src={item.icon?.url || "/images/check-icon.svg"}
                      alt={item.icon?.alt || "check"}
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-medium text-2xl text-black">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {footerImage?.url && (
            <div className="hidden md:block absolute w-full h-auto -bottom-24 z-10">
              <Image
                src={footerImage.url}
                alt={footerImage?.alt || "footer"}
                width={251}
                height={57}
                className="mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default FISMAComplianceSection