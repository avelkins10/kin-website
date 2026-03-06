import { readFileSync } from 'fs'
import { join } from 'path'

export default function CareersPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'careers-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
