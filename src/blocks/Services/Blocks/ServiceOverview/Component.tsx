import type { Page } from '@/payload-types'

type ServiceOverviewBlockProps = Extract<Page['layout'][0], { blockType: 'servicesOverview' }>

export default function ServiceOverview({
  title,
  description,
  servicesIntroText,
  leftColumnServices,
  rightColumnServices,
}: ServiceOverviewBlockProps) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title, Description, and Intro Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{title}</h2>

            <div className="space-y-4">
              {description.map((p) => (
                <p key={p.id} className="text-gray-700 text-base leading-relaxed">
                  {p.paragraph}
                </p>
              ))}

              <p className="text-gray-900 font-medium text-base pt-2">{servicesIntroText}</p>
            </div>
          </div>

          {/* Right Column - Services Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Services Column */}
            <div>
              <ul className="space-y-3">
                {leftColumnServices.map((s) => (
                  <li key={s.id} className="flex items-start">
                    <span className="text-gray-900 mr-3 mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-700 text-base leading-relaxed">{s.service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Services Column */}
            <div>
              <ul className="space-y-3">
                {rightColumnServices.map((s) => (
                  <li key={s.id} className="flex items-start">
                    <span className="text-gray-900 mr-3 mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-700 text-base leading-relaxed">{s.service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
