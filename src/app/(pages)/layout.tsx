import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { IMAGE_PREFIX } from '@/app/utils/config'
import Footer from '@/app/(pages)/components/footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {/*<div className="w-full navbar fixed top-0 left-0 right-0 z-10 bg-white">*/}
      {/*  <div className="flex-1 px-2 mx-2">*/}
      {/*    <Link href={'/'}>*/}
      {/*      <div*/}
      {/*        className={'flex justify-center items-center gap-[8px] select-none cursor-pointer'}*/}
      {/*      >*/}
      {/*        <img*/}
      {/*          className="mask mask-squircle w-[32px] h-[32px]"*/}
      {/*          src={`${IMAGE_PREFIX}/assets/logo.png`}*/}
      {/*          alt={'청구보감'}*/}
      {/*        />*/}
      {/*        <h1 className={'text-[16px] font-bold'}>청구보감</h1>*/}
      {/*      </div>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  <div className="flex-none">*/}
      {/*    <ul className="menu menu-horizontal p-0 mr-[16px]">*/}
      {/*      <li className={'select-none cursor-pointer'}>문의하기</li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={'w-full pt-[64px]'}>{children}</div>*/}
      <div className={'w-full'}>{children}
      <Footer/>
      </div>
    </>
  )
}
