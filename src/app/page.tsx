import { readFileSync } from 'fs'
import { join } from 'path'

export default function HomePage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'body-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
