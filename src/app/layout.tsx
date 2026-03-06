import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KIN Home Solar — Best Solar Companies Serving IL, OK, UT, TX, CA, FL, MO, OH, & IA',
  description: 'Looking for the best solar companies? We focus on customer experience. Access to speed, efficiency, quality, and care is our top priority.',
  openGraph: {
    title: 'Best Solar Companies Serving IL, OK, UT, TX, CA, FL, MO, OH, & IA',
    description: 'Looking for the best solar companies? We focus on customer experience. Access to speed, efficiency, quality, and care is our top priority.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Solar Companies Serving IL, OK, UT, TX, CA, FL, MO, OH, & IA',
    description: 'Looking for the best solar companies? We focus on customer experience. Access to speed, efficiency, quality, and care is our top priority.',
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
        <link href="/webflow.css" rel="stylesheet" />
        <link href="/custom-styles.css" rel="stylesheet" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EHP9Y5WK5W" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EHP9Y5WK5W', {'anonymize_ip': false});
        `}} />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif", WebkitFontSmoothing: 'antialiased' }}>
        {children}
      </body>
    </html>
  )
}
