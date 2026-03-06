import { readFileSync } from 'fs'
import { join } from 'path'

export default function RoofingPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'roofing-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
