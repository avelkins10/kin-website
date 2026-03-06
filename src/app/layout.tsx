import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solar, HVAC & Roofing Installation | KIN Home',
  description: 'KIN Home installs solar panels, HVAC systems, and roofing for homeowners in FL, CA, and 8 other states. 882 reviews. Get a free estimate today.',
  openGraph: {
    title: 'KIN Home — Solar, HVAC & Roofing for Your Home',
    description: '882 five-star Google reviews. In-house crews. $0 down financing. Get a free estimate from KIN Home.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/img/Logo---Icon---Black-2.png',
    apple: '/img/KinHome_WebIcons-2.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EHP9Y5WK5W" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EHP9Y5WK5W');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
