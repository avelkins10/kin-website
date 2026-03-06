import { readFileSync } from 'fs'
import { join } from 'path'

export default function AboutPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'about-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
