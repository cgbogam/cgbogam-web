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
  title: {
    template: '%s | DIY 청구',
    default: 'DIY 청구',
  },
  description: 'DIY 청구',
  openGraph: {
    type: 'website',
    url: 'https://cgbogam.github.io/cgbogam-web',
    title: 'DIY 청구',
    description: '청구를 쉽게 도와줄게요',
    siteName: 'DIY 청구',
    images: [
      {
        url: 'https://cgbogam.github.io/cgbogam-web/assets/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://cgbogam.github.io/cgbogam-web',
    creator: 'DIY 청구',
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
