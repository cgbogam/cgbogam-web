'use client'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import HomeComponent from '@/app/(pages)/home'

type TPageClient = {}
export default function HomeClient(): React.JSX.Element {
  const [mobile, setMobile] = useState<boolean>(false)
  useEffect(() => {
    setMobile(isMobile)
  }, [])
  return (
    <div
      className={`overflow-y-scroll h-[calc(100vh_-_64px)] ${
        mobile ? '' : 'snap-y snap-mandatory'
      }`}
    >
      <HomeComponent />
    </div>
  )
}
