import { readFileSync } from 'fs'
import { join } from 'path'

export default function ContactPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'contact-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
