import fs from 'node:fs/promises'
import path from 'node:path'
import { UTApi, UTFile } from 'uploadthing/server'
import { createWriteStream } from 'node:fs'

console.log(process.env.UPLOADTHING_TOKEN)

const utapi = new UTApi({
  token:
    'eyJhcGlLZXkiOiJza19saXZlXzljY2Q4MjgwNzE3OTc2OThlMzlmMWYwOWY4NDViZWM2OGI1MmU5OWU1OTliNjEwN2I1NTVkNWQ0ZmM0ODJlNGMiLCJhcHBJZCI6InZoZTM5aHRobjAiLCJyZWdpb25zIjpbInNlYTEiXX0=',
})
const INPUT_DIR = path.resolve('./public/media') // your folder
const OUT_CSV = path.resolve('./ut-upload-map.csv')

const extToMime: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
}

function guessMime(name: string) {
  return extToMime[path.extname(name).toLowerCase()] ?? 'application/octet-stream'
}

async function main() {
  const files = await fs.readdir(INPUT_DIR)
  const out = createWriteStream(OUT_CSV)
  out.write('filename,url,key\n')

  console.log('Uploading files to UploadThing...')

  // Read the list of items in inpit fir
  // Only process image files to avoid uploading unintended files
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)
  })

  if (imageFiles.length === 0) {
    console.log('No image files found in', INPUT_DIR)
    out.end()
    return
  }

  console.log(`Found ${imageFiles.length} image files to upload`)

  // modest concurrency to avoid rate limits
  const queue = imageFiles.map(async (name) => {
    const full = path.join(INPUT_DIR, name)
    const stat = await fs.stat(full)
    if (!stat.isFile()) return

    const buf = await fs.readFile(full)

    if (!buf.length) {
      console.warn('Skipping empty file:', name)
      return
    }

    try {
      const utFile = new UTFile([buf], name, {
        type: guessMime(name), // ✅ important
        customId: `payload-filename:${name}`,
      })

      const [res] = await utapi.uploadFiles([utFile]) // keep array form

      if (!res?.data) {
        console.error('Upload failed (no data):', name, res)
        return
      }

      out.write(`${JSON.stringify(name)},${res.data.ufsUrl},${res.data.key}\n`) // ✅ .url not .ufsUrl
      console.log('Uploaded', name)
    } catch (err) {
      console.error('Upload failed:', name, err)
    }
  })

  await Promise.all(queue)
  out.end()
  console.log('Done ->', OUT_CSV)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
