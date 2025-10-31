import payloadConfig from '@payload-config'
import fs from 'node:fs/promises'
import path from 'node:path'
import { BasePayload, CollectionSlug, getPayload } from 'payload'

async function exportCollection(
  payload: BasePayload,
  slug: CollectionSlug,
  { publishedOnly = true, depth = 0 } = {},
) {
  let page = 1
  const all: any[] = []
  const where = publishedOnly ? { _status: { equals: 'published' } } : undefined

  for (;;) {
    const res = await payload.find({
      collection: slug,
      page,
      limit: 100,
      depth,
      where,
    })
    if (!res.docs.length) break
    all.push(...res.docs)
    page++
  }

  const outPath = path.join(process.cwd(), 'exports', `${slug}.json`)
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, JSON.stringify(all, null, 2))
  console.log(`Exported ${all.length} from ${slug} → ${outPath}`)
}

async function run() {
  const payload = await getPayload({ config: payloadConfig }) // local API, no server

  // Show what collections actually loaded
  const available = payload.config.collections?.map((c) => c.slug) ?? []
  console.log('Loaded collections:', available)

  const slugs = ['pages', 'services', 'case-studies'] as CollectionSlug[] // adjust to match your real slugs
  for (const slug of slugs) {
    if (!available.includes(slug as CollectionSlug)) {
      console.warn(`Skipping "${slug}": not found in config.`)
      continue
    }
    await exportCollection(payload, slug as CollectionSlug, { publishedOnly: true, depth: 0 })
  }
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
