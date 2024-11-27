import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Footer from './components/footer'
import { Navbar } from './components/nav'
import { ThemeProvider } from './components/theme-switch'
import { metaData } from './config'
import './styles/globals.css'

const geistSans = localFont({
  src: './styles/fonts/GeistVF.woff',
  variable: '--font-geist-sans'
  // weight: '100 900'
})
const geistMono = localFont({
  src: './styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
  // weight: '100 900'
})

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: metaData.name,
    card: 'summary_large_image'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="mx-auto mb-20 mt-2 flex flex-col items-center justify-center antialiased lg:mb-40 lg:mt-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mt-2 flex w-full min-w-0 max-w-[640px] flex-auto flex-col px-6 sm:px-4 md:mt-6 md:px-0">
            {/* <GlobalNav /> */}
            <Navbar />
            {children}
            <Footer />
            {/* <Analytics /> */}
            {/* <SpeedInsights /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
