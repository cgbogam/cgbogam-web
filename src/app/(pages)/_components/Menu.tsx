'use client'

import React, { useEffect } from 'react'
import { Sheet, SheetClose, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import Hamburger from '@/app/(pages)/_components/Hamburger'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  isOpen: boolean
  close: () => void
  unmount: () => void
}

const MENUS = [
  { id: 0, name: '메인', path: '/' },
  { id: 1, name: '당뇨약 조합', path: '/dm' },
]

export default function Menu(props: Props) {
  const { isOpen, close, unmount } = props
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    return () => unmount()
  }, [])

  return (
    <Sheet open={isOpen}>
      <SheetTitle className={'hidden'}></SheetTitle>
      <SheetClose className={'hidden'} asChild={false} />
      <SheetContent
        className="w-full mobile:w-[582px] z-[1301] mobile:bg-white bg-white/95"
        onInteractOutside={close}
      >
        <div
          className={cn(
            'px-6 transition-all',
            'flex items-center justify-between',
            'w-full h-[60px] desktop:h-[110px] bg-white',
          )}
        >
          <div className={'relative'}>
            {/* 로고 영역 */}
            {/*<div*/}
            {/*  className={cn(*/}
            {/*    'relative transition-all',*/}
            {/*    'w-[32px] h-[32px] desktop:w-[42px] desktop:h-[42px]',*/}
            {/*  )}*/}
            {/*>*/}
            {/*  <Image src={`${IMAGE_PREFIX}/assets/jm_logo.png`} alt={'jm logo'} fill />*/}
            {/*</div>*/}
          </div>
          <div className={'relative'}>{/* 글씨 영역 */}</div>
          <div className={'relative'}>
            {/* 메뉴*/}
            <Hamburger isOpen={true} onClick={() => close()} />
          </div>
        </div>

        <ul
          className={cn(
            'text-[24px] space-y-4 px-6 py-20 transition-all',
            'desktop:text-[32px] desktop:space-y-6 desktop:font-medium',
          )}
        >
          {MENUS.map((item) => (
            <li
              key={item.id}
              className={cn(
                pathname === item.path ? 'text-blue-900' : '',
                'flex items-center justify-start gap-x-2',
                'cursor-pointer hover:text-blue-700 transition-colors',
                'desktop:gap-x-4',
              )}
              onClick={() => {
                router.push(item.path)
                close()
              }}
            >
              {pathname === item.path && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 desktop:size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              )}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <div className={'flex items-center justify-start gap-x-2 px-6'}>
          <div className={'p-3 hover:bg-gray-100 hover:[&_svg]:fill-blue-800 rounded-md'}>
            <a
              href={'https://www.instagram.com/jjungmine_e?igsh=bTN6djhkdHQwMmdw'}
              target={'_blank'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className={'size-8 desktop:size-10 fill-gray-500'}
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
          <div className={'p-3 hover:bg-gray-100 hover:[&_svg]:stroke-blue-800 rounded-md'}>
            <a href={'mailto:hbbogam@gmail.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="size-8 desktop:size-10 stroke-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
