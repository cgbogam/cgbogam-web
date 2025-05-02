'use client'
import Link from 'next/link'

interface Props {
  redirectUrl: string
}

export default function NotFound(props: Props) {
  const { redirectUrl = '/' } = props
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="border-[1px] border-white px-5 py-3">
          <h2 className="text-[100px] text-gray-300">404</h2>
          <p className="text-[40px] font-medium text-gray-300">Page Not Found</p>
          <p className="text-[20px] font-medium text-gray-300">
            요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하였습니다.
          </p>
          <div className={'mt-[16px]'}>
            <Link href={redirectUrl}>
              <button className="btn">메인으로 이동하기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
