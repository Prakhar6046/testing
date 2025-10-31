// import { Media } from '@/payload-types'
// import Image from 'next/image'
// import { FC } from 'react'

// interface ConsultingItem {
//   title: string
//   subtitle: string
//   points: { text: string; icon?: Media }[]
// }

// interface CmmcConsultingProps {
//   heading: string
//   description: string
//   items: ConsultingItem[]
// }

// const CmmcConsulting: FC<CmmcConsultingProps> = ({ heading, description, items }) => {
//   return (
//     <section className={`bg-background md:px-14 py-10 md:py-20 `}>
//       <div className="container mx-auto md:px-0 px-4 ">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 ">
//           {items.map((item, idx) => (
//             <div
//               key={idx}
//               className={
//                 idx === 1
//                   ? 'flex justify-between flex-col items-center pb-7'
//                   : 'bg-white rounded-2xl shadow-2xl p-6'
//               }
//             >
//               {/* Render regular item content for all items except the middle one */}
//               {idx !== 1 && (
//                 <>
//                   <h1 className="text-xl md:text-2xl font-bold text-(--wils_orang)">
//                     {item.title}
//                   </h1>
//                   <h1 className="text-xl md:text-2xl font-bold ">{item.subtitle}</h1>
//                   <div className="flex flex-col gap-4 my-4">
//                     {item.points.map((point, pIdx) => (
//                       <div key={pIdx} className="flex gap-2 items-start">
//                         {point?.icon?.url && (
//                           <Image
//                             className="mt-1"
//                             src={point?.icon?.url || ''}
//                             alt="icon"
//                             width={25}
//                             height={25}
//                           />
//                         )}
//                         <p className="text-sm md:text-base">{point.text}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {/* Render center content only for middle item */}
//               {idx === 1 && (
//                 <>
//                   <h1 className="text-3xl md:text-5xl text-center w-full">{heading}</h1>
//                   <p className="text-center text-sm md:text-base">{description}</p>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CmmcConsulting



'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

type Props = {
  leftCard: {
    title: string;
    subtitle: string;
    items: {
      text: string;
      icon?: { url: string; alt?: string };
    }[];
  };
  center: {
    heading: string;
    description: string;
  };
  rightCard: {
    title: string;
    subtitle: string;
    items: {
      text: string;
      icon?: { url: string; alt?: string };
    }[];
  };
};



export default function CmmcConsulting({ leftCard, center, rightCard }: Props) {
  // const { leftCard, center, rightCard } = block

  return (
    <section className="bg-background md:px-14 py-10 md:py-20">
      <div className="container mx-auto md:px-0 px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 ">
          {/* Left Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <h1 className="text-xl md:text-2xl font-bold text-(--wils_orang)">
              {leftCard?.title || ""}
            </h1>
            <h1 className="text-xl md:text-2xl font-bold">{leftCard?.subtitle || ""}</h1>
            <div className="flex flex-col gap-4 my-4">
              {leftCard?.items?.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <Image
                    className="mt-1"
                    src={item.icon?.url || '/images/circle_check2.svg'}
                    alt={item.icon?.alt || 'check'}
                    width={25}
                    height={25}
                  />
                  <p className="text-sm md:text-base">{item?.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Content */}
          <div className="flex justify-between flex-col items-center pb-7">
            <h1 className="text-3xl md:text-5xl text-center w-full">{center?.heading || ""}</h1>
            <p className="text-center text-sm md:text-base">{center?.description || ""}</p>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <h1 className="text-xl md:text-2xl font-bold text-(--wils_orang)">
              {rightCard?.title || ""}
            </h1>
            <h1 className="text-xl md:text-2xl font-bold">{rightCard?.subtitle || ""}</h1>
            <div className="flex flex-col gap-4 my-4">
              {rightCard?.items?.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <Image
                    className="mt-1"
                    src={item?.icon?.url || '/images/circle_check2.svg'}
                    alt={item?.icon?.alt || 'check'}
                    width={25}
                    height={25}
                  />
                  <p className="text-sm md:text-base">{item?.text || ""}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

