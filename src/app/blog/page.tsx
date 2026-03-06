import { readFileSync } from 'fs'
import { join } from 'path'

export default function BlogPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'blog-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
