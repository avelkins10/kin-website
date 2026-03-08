import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ state: string }>
}

export function generateStaticParams() {
  return [
    { state: 'florida' },
    { state: 'california' },
  ]
}

export default async function StatePage({ params }: Props) {
  const { state } = await params
  // Redirect state-level URLs to the service areas page
  redirect('/service-areas')
}
