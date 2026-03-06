import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KIN Home — Solar, Roofing & HVAC | 4,000+ Installs Across 10 States',
  description: 'KIN Home is a residential solar, roofing, and HVAC company focused on an unmatched customer experience. 882+ five-star reviews. Get a free instant estimate.',
  openGraph: {
    title: 'KIN Home — Solar, Roofing & HVAC',
    description: '4,000+ installs. 882+ five-star reviews. 10 states. Get your free instant estimate.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/img/Logo---Icon---Black-2.png',
    apple: '/img/KinHome_WebIcons-2.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
          gtag('config', 'G-EHP9Y5WK5W', {'anonymize_ip': false});
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
