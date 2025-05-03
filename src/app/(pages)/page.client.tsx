'use client'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import HomeComponent from '@/app/(pages)/_components/home'

export default function HomeClient() {
  const [mobile, setMobile] = useState<boolean>(false)
  useEffect(() => {
    setMobile(isMobile)
  }, [])
  return (
    <div className={`overflow-y-scroll ${mobile ? '' : 'snap-y snap-mandatory'}`}>
      <HomeComponent />
    </div>
  )
}
