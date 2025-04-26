import React from 'react'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'normalize.css'
import { IMAGE_PREFIX } from '@/app/utils/config'

const rootFont = localFont({
  src: './fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JMDG',
  description: 'JMDG',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
    maximumScale: 1,
  },
  openGraph: {
    type: 'website',
    url: 'https://cgbogam.github.io/cgbogam-web',
    title: 'JMDG',
    description: 'JMDG',
    siteName: 'JMDG',
    images: [
      {
        url: 'https://cgbogam.github.io/cgbogam-web/assets/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://cgbogam.github.io/cgbogam-web',
    creator: 'JMDG',
    images: 'https://cgbogam.github.io/cgbogam-web/assets/logo.png',
  },
  icons: {
    icon: `${IMAGE_PREFIX}/favicon.ico`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={rootFont.className}>
      <body>{children}</body>
    </html>
  )
}
