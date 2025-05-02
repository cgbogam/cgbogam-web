'use client'
import React from 'react'

export default function Footer(): React.JSX.Element {
  return (
    <footer
      className={'h-[100px] px-3 bg-base-200 flex justify-center items-center snap-start flex-col'}
    >
      <div className={'mb-2'}>
        <a
          className={'cursor-default'}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <img
            src="https://myhits.vercel.app/api/hit/https%3A%2F%2Fcgbogam.github.io%2Fcgbogam-web?color=green&label=방문자%20%20&size=medium"
            alt="방문자"
          />
        </a>
      </div>
      <p>ⓒ 2025. JM All Rights Reserved.</p>
    </footer>
  )
}
