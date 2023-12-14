import React from 'react'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'normalize.css'

const rootFont = localFont({
  src: './fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '청구보감',
  description: '청구보감',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={rootFont.className}>
      <head>
        <meta httpEquiv={'pragma'} content={'-1'} />
        <meta httpEquiv={'expires'} content={'no-cache'} />
      </head>
      <body>{children}</body>
    </html>
  )
}
