import { readFileSync } from 'fs'
import { join } from 'path'

export default function HvacPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'hvac-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
