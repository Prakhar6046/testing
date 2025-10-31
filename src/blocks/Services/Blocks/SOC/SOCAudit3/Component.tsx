import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

type ComponentProps = {
  mainTitle: string
  description: string
  additionalDescription?: string
  image: Media
  componentsHeading: string
  components: { text: string; icon?: Media }[]
  linkText: string
  linkUrl: string
}

export const Soc3Block: React.FC<ComponentProps> = ({ mainTitle, description, additionalDescription, image, componentsHeading, components, linkText, linkUrl }) => {
  return (
    <section>
      <div className="container mx-auto px-4 pb-8 sm:pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {image?.url ? (
              <Image
                src={image.url}
                width={590}
                height={365}
                alt={mainTitle || ''}
                className="rounded-[14px] object-cover w-full mx-auto h-full shadow-[0_0_30px_-6px_rgba(0,0,0,0.25)]"
              />
            ) : null}
          </div>

          <div>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
              {mainTitle || ''}
            </h2>

            <p>{description}</p>

            {additionalDescription && <p>{additionalDescription || ""}</p>}

            <div className="my-3">
              <p className="font-bold text-lg sm:text-xl mb-3">{componentsHeading || ""}</p>

              <ul className="flex flex-col gap-3 mt-5">
                {components?.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {comp?.icon?.url ? (
                      <Image
                        src={comp.icon?.url}
                        width={22}
                        height={22}
                        alt="Check Circle"
                        className="mt-[1px]"
                      />
                    ) : null}
                    {comp?.text}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={linkUrl || '#'}
              className="text-(--wils_orang) font-bold text-lg hover:opacity-70"
            >
              {linkText || ""}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
