import { readFileSync } from 'fs'
import { join } from 'path'

export default function ProjectsPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'projects-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
