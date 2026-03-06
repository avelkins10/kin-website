import { readFileSync } from 'fs'
import { join } from 'path'

export default function PrivacyPolicyPage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'privacy-policy-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
