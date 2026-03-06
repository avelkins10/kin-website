import { readFileSync } from 'fs'
import { join } from 'path'

export default function TermsAndConditionsPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'terms-and-conditions-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
