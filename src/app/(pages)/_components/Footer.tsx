'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { IMAGE_PREFIX } from '@/app/utils/config'

export default function Footer() {
  return (
    <footer
      className={
        'pt-8 pb-16 bg-gray-100 flex justify-center items-center flex-col snap-start gap-6'
      }
    >
      <div
        className={cn(
          'w-full flex items-center justify-center flex-col gap-3',
          'tablet:items-start tablet:justify-between tablet:px-24',
        )}
      >
        <div className={'flex items-center justify-start gap-x-2'}>
          <div className={cn('relative transition-all', 'w-[18px] h-[18px]')}>
            <Image src={`${IMAGE_PREFIX}/assets/jm_logo.png`} alt={'jm logo'} fill />
          </div>
          <span className={'text-lg font-semibold'}>DIY 청구</span>
        </div>

        <div className={'flex items-center justify-end gap-x-2'}>
          <div className={'p-1 hover:bg-gray-200 hover:[&_svg]:fill-blue-800 rounded-md'}>
            <a
              href={'https://www.instagram.com/jjungmine_e?igsh=bTN6djhkdHQwMmdw'}
              target={'_blank'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className={'size-6'}
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
          <div className={'p-1 hover:bg-gray-200 hover:[&_svg]:stroke-blue-800 rounded-md'}>
            <a href={'mailto:hbbogam@gmail.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="size-6 stroke-black"
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
      </div>
      <div
        className={cn(
          'w-full flex items-center justify-center flex-col-reverse gap-4',
          'tablet:items-top tablet:justify-between tablet:flex-row tablet:px-24',
        )}
      >
        <div>
          <p>ⓒ 2025. JM All Rights Reserved.</p>
        </div>
        <div>
          <a
            className={'cursor-default'}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://myhits.vercel.app/api/hit/https%3A%2F%2Fcgbogam.github.io%2Fcgbogam-web?color=green&label=방문자%20%20&size=medium"
              alt="방문자"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
