'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  className?: string
  isOpen: boolean
  onClick?: () => void
}

export default function Hamburger(props: Props) {
  const { className, isOpen, onClick } = props
  return (
    <button
      className={cn(
        'flex flex-col rounded justify-center items-center group',
        'h-[32px] w-[32px] cursor-pointer',
      )}
      onClick={() => {
        onClick?.()
      }}
    >
      <div
        className={cn(
          'h-1 w-6 my-0.5 rounded-full bg-black',
          'transition ease transform duration-300',
          isOpen
            ? 'rotate-45 translate-y-2 opacity-100 group-hover:bg-blue-800'
            : 'opacity-100 group-hover:bg-blue-800',
        )}
      />
      <div
        className={cn(
          'h-1 w-6 my-0.5 rounded-full bg-black',
          'transition ease transform duration-300',
          isOpen ? 'opacity-0' : 'opacity-100 group-hover:bg-blue-800',
        )}
      />
      <div
        className={cn(
          'h-1 w-6 my-0.5 rounded-full bg-black',
          'transition ease transform duration-300',
          isOpen
            ? '-rotate-45 -translate-y-2 opacity-100 group-hover:bg-blue-800'
            : 'opacity-100 group-hover:bg-blue-800',
        )}
      />
    </button>
  )
}
