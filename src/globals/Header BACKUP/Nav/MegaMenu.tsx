'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

interface MegaMenuProps {
  sections: {
    title?: string
    items: { name: string; href: string }[]
  }[]
  onItemClick?: () => void
}

export default function MegaMenu({ sections, onItemClick }: MegaMenuProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{ opacity: 1, y: 0, height: 'auto' }}
        exit={{ opacity: 0, y: -10, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:max-w-[1240px] md:rounded-[40px] md:bg-white md:py-9 md:px-16 flex flex-row flex-nowrap justify-center gap-4 md:gap-[100px] px-4 md:shadow-lg mt-4"
        style={{
          maxWidth: '1240px',
        }}
      >
        {sections.map((section, idx) => (
          <div key={idx} className="min-w-[211px] max-w-[450px]">
            {section.title && (
              <h4 className="md:text-2xl text-lg font-medium text-black border-b border-black/10 pb-5 mb-5">
                {section.title}
              </h4>
            )}
            <ul className="space-y-4 w-fit list-disc marker:text-secondary marker:text-xl pl-5">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-lg font-normal text-black hover:text-secondary transition-all"
                    onClick={onItemClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
