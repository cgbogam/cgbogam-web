'use client'
import React, { PropsWithChildren } from 'react'
import Footer from '@/app/(pages)/_components/Footer'
import Header from '@/app/(pages)/_components/Header'
import { OverlayProvider } from 'overlay-kit'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={'w-full'}>
      <OverlayProvider>
        <Header />
        {children}
        <Footer />
      </OverlayProvider>
    </div>
  )
}
