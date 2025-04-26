import React from 'react'
import DMClient from '@/app/(pages)/dm/page.client'

export default function DM(): React.JSX.Element {
  return (
    <main className={'w-full overscroll-none'}>
      <DMClient />
    </main>
  )
}
