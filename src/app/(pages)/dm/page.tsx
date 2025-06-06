import React from 'react'
import DMClient from '@/app/(pages)/dm/page.client'

export async function generateMetadata() {
  return {
    title: '당뇨약 조합',
    openGraph: {
      title: '당뇨약 조합',
      description: '당뇨약 조합을 쉽게 확인해 보세요.',
      images: 'https://cgbogam.github.io/cgbogam-web/assets/og-image.png',
    },
    twitter: {
      title: '당뇨약 조합',
      description: '당뇨약 조합을 쉽게 확인해 보세요.',
      images: 'https://cgbogam.github.io/cgbogam-web/assets/og-image.png',
    },
  }
}

export default function DM(): React.JSX.Element {
  return (
    <main className={'w-full overscroll-none pt-[60px] desktop:pt-[110px]'}>
      <DMClient />
    </main>
  )
}
