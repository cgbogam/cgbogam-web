import React from 'react'
import SearchClient from '@/app/(pages)/search/page.client'

export default function Search(): React.JSX.Element {
  return (
    <main className={'w-full overscroll-none'}>
      <SearchClient/>
    </main>
  )
}
