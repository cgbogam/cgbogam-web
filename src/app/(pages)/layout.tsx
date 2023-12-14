import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { IMAGE_PREFIX } from '@/app/utils/config'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none tablet:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href={'/'}>
              <div
                className={'flex justify-center items-center gap-[8px] select-none cursor-pointer'}
              >
                <img
                  className="mask mask-squircle w-[32px] h-[32px]"
                  src={`${IMAGE_PREFIX}/assets/logo.png`}
                />
                <h1 className={'text-[16px] font-bold'}>청구보감</h1>
              </div>
            </Link>
          </div>
          <div className="flex-none hidden tablet:block">
            <ul className="menu menu-horizontal p-0">
              <li className={'select-none cursor-pointer'}>
                <Link href={'/intro'}>소개</Link>
              </li>
              <li className={'select-none cursor-pointer'}>
                <Link href={'/consulting'}>컨설팅</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className={'w-full'}>{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <li className={'select-none cursor-pointer'}>
            <Link href={'/intro'}>소개</Link>
          </li>
          <li className={'select-none cursor-pointer'}>
            <Link href={'/consulting'}>컨설팅</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
