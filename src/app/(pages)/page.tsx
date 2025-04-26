import React from 'react'
import HomeClient from '@/app/(pages)/page.client'
import NotFound from '@/app/not-found'

export default function Home(): React.JSX.Element {
  return (
    <main className={'w-full overscroll-none'}>
      {/*<HomeClient />*/}
      <NotFound redirectUrl={'/dm'} />
    </main>
  )
}
