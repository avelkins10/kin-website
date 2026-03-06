import { readFileSync } from 'fs'
import { join } from 'path'

export default function GetAnInstantEstimatePage() {
  const bodyHtml = readFileSync(join(process.cwd(), 'export', 'get-an-instant-estimate-clean.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
