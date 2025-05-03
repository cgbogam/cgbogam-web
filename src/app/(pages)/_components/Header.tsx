'use client'

import React from 'react'
import Link from 'next/link'
import { IMAGE_PREFIX } from '@/app/utils/config'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { overlay } from 'overlay-kit'
import Menu from '@/app/(pages)/_components/Menu'
import Hamburger from '@/app/(pages)/_components/Hamburger'
import { useScrollingVisible } from '@/app/utils/useScrollingVisible'

export default function Header() {
  const { isShow, isTop } = useScrollingVisible({ offset: 70, delay: 10 })

  return (
    <header
      className={cn(
        'fixed z-[1300] top-0 left-0 px-6 transition-all',
        'flex items-center justify-between',
        'w-full h-[60px] desktop:h-[110px]',
        isShow ? 'translate-y-0 opacity-100' : '-translate-y-[100%] opacity-0',
        isTop ? 'bg-white' : 'bg-white/95',
      )}
    >
      <div className={'relative'}>
        {/* 로고 영역 */}
        <Link href={'/'} title={'홈으로 이동'}>
          <div
            className={cn(
              'relative transition-all',
              'w-[32px] h-[32px] desktop:w-[42px] desktop:h-[42px]',
            )}
          >
            <Image src={`${IMAGE_PREFIX}/assets/jm_logo.png`} alt={'jm logo'} fill />
          </div>
        </Link>
      </div>
      <div className={'relative'}>{/* 글씨 영역 */}</div>
      <div className={'relative z-[301]'}>
        {/* 메뉴*/}
        <Hamburger
          isOpen={false}
          onClick={() => {
            overlay.open(
              ({ isOpen, close, unmount }) => (
                <Menu
                  isOpen={isOpen}
                  close={() => {
                    close()
                  }}
                  unmount={unmount}
                />
              ),
              { overlayId: 'menu' },
            )
          }}
        />
      </div>
    </header>
  )
}
