import { Media } from '@/payload-types';
import React from 'react';
import { cn } from "@/lib/utils";

type ComplianceItem = {
  number: string;
  content: any;
};

type ComplianceSectionProps = {
  title: string;
  description: string;
  items: ComplianceItem[];
  backgroundImage?: Media;
};

export default function WhoNeedsToComplyComponent({
  title,
  description,
  items,
  backgroundImage,
}: ComplianceSectionProps) {

  return (
    <section
      className=
      "bg-no-repeat bg-cover bg-left sm:bg-center relative before:bg-black/50 before:absolute before:top-0 before:left-0 before:w-full before:h-full"
      style={{ backgroundImage: `url('${backgroundImage?.url || ''}')` }}
    >
      <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="sm:col-span-3 lg:col-span-6"></div>

          <div className="sm:col-span-9 lg:col-span-6">
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6">
              {title}
            </h2>

            <p className="text-white">{description}</p>

            <div className="mt-8">
              <ul className="flex flex-col gap-8 before:w-0.5 before:h-10/12 before:bg-white before:absolute before:left-6 before:-z-10 before:top-1/2 before:-translate-y-1/2 relative">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-white relative"
                  >
                    <div className="bg-(--secondary) rounded-full p-4 font-bold size-[50px] flex items-center justify-center">
                      {item.number}
                    </div>

                    <div>
                      {item?.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


