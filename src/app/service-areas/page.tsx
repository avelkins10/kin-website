import { readFileSync } from 'fs'
import { join } from 'path'

export default function ServiceAreasPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'service-areas-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
