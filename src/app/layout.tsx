import React from 'react'
import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'normalize.css'
import { IMAGE_PREFIX } from '@/app/utils/config'

const rootFont = localFont({
  src: './fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: 'DIY청구',
  description: 'DIY청구',
  openGraph: {
    type: 'website',
    url: 'https://cgbogam.github.io/cgbogam-web',
    title: 'DIY청구',
    description: 'DIY청구',
    siteName: 'DIY청구',
    images: [
      {
        url: 'https://cgbogam.github.io/cgbogam-web/assets/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://cgbogam.github.io/cgbogam-web',
    creator: 'DIY청구',
    images: 'https://cgbogam.github.io/cgbogam-web/assets/logo.png',
  },
  icons: {
    icon: `${IMAGE_PREFIX}/favicon.ico`,
  },
}

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={rootFont.className}>{children}</body>
    </html>
  )
}
