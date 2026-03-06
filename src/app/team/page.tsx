import { readFileSync } from 'fs'
import { join } from 'path'

export default function TeamPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'team-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
