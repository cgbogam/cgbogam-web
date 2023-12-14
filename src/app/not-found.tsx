'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="border-[1px] border-white px-5 py-3">
          <h2 className="text-[100px] text-gray-300">404</h2>
          <p className="text-[40px] font-medium text-gray-300">Page Not Found</p>
          <p className="text-[20px] font-medium text-gray-300">
            요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하였습니다.
          </p>
          <Link href={'/'}>
            <button className="btn mt-[16px]">메인으로 이동하기</button>
          </Link>
        </div>
      </div>
    </>
  )
}
