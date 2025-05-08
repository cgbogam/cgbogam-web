'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  disabled?: boolean
  onClick?: () => void
}

export default function FloatingSearch(props: Props) {
  const { disabled, onClick } = props
  return (
    <button
      className={cn(
        'h-14 w-14 fixed bottom-4 right-4 rounded-full flex items-center justify-center',
        'tablet:right-12 tablet:bottom-12',
        'bg-white border border-gray-300 shadow-lg hover:border-blue-800 focus:border-blue-800 hover:[&_svg]:stroke-blue-800 focus:[&_svg]:stroke-blue-800',
        'cursor-pointer',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 stroke-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  )
}
