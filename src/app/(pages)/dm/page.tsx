import React from 'react'
import DMClient from '@/app/(pages)/dm/page.client'
import { Metadata } from 'next'
import { IMAGE_PREFIX } from '@/app/utils/config'

export const metadata: Metadata = {
  title: '당뇨약 조합',
  description: '당뇨약 조합을 쉽게 확인해 보세요.',
  openGraph: {
    type: 'website',
    url: 'https://cgbogam.github.io/cgbogam-web',
    title: '당뇨약 조합',
    description: '당뇨약 조합을 쉽게 확인해 보세요.',
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

export default function DM(): React.JSX.Element {
  return (
    <main className={'w-full overscroll-none'}>
      <DMClient />
    </main>
  )
}
