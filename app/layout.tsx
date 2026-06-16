import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ACoolNERD — Enterprise Technology Consulting',
    template: '%s | ACoolNERD',
  },
  description:
    'ACoolNERD is Keith Z. C. McPherson\'s enterprise technology consulting brand — digital architecture, civic tech, and AI systems for Los Angeles and beyond.',
  keywords: ['technology consulting', 'enterprise software', 'Los Angeles', 'AI systems', 'civic tech', 'Keith McPherson'],
  authors: [{ name: 'Keith Z. C. McPherson' }],
  openGraph: {
    siteName: 'ACoolNERD',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="chrome-surface min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
