'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ResourceCardProps {
  title: string
  description: string
  image: string
  type: string
  industry: string
  date: string
  slug: string
  readTime: number
}

const ResourceCard: FC<ResourceCardProps> = ({
  title,
  description,
  image,
  type,
  industry,
  date,
  slug,
  readTime,
}) => {
  console.log(slug, type)
  return (
    <div className="rounded-t-[24px] overflow-hidden h-[510.122px] flex flex-col">
      <div className="relative h-[284px] rounded-[24px] flex-shrink-0">
        <p className="text-xs font-normal text-white bg-wils_orang px-2.5 py-3.5 absolute right-0 left-[57px] rounded-tr-[24px]">
          {industry}
        </p>
        <Link href={slug}>
          <Image
            src={image}
            alt={title}
            className="object-cover object-top w-full h-full rounded-[24px]"
            width={288}
            height={284}
          />
        </Link>
        <div className="absolute top-0 left-0 bottom-0 w-[57px] bg-foreground flex justify-center items-start pt-4 rounded-bl-[24px]">
          <Image src="/images/logo-icon-white.png" alt="site-icon" width={22} height={27} />
        </div>
      </div>
      <div className="flex flex-col flex-grow min-h-0 overflow-hidden">
        <Link
          href={slug}
          className="text-xs font-bold text-wils_orang my-3 flex w-fit flex-shrink-0"
        >
          {type.toUpperCase()}
        </Link>
        <Link
          href={slug}
          className="text-xl md:text-2xl font-semibold tracking-[-0.4px] text-black hover:text-wils_orang hover:underline mb-3.5 line-clamp-2 flex-shrink-0"
        >
          {title}
        </Link>
        <p className="text-base font-normal text-black mb-6 flex-grow overflow-hidden line-clamp-3">
          {description}
        </p>
        <ul className="flex gap-2 mt-auto flex-shrink-0">
          {date && (
            <li className="text-sm font-normal text-[#49575A] p-2.5 border border-[#CFDCEC] rounded-md">
              {date}
            </li>
          )}
          <li className="text-sm font-normal text-[#49575A] p-2.5 border border-[#CFDCEC] rounded-md">
            {readTime} min read
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResourceCard
