import React from 'react'

type TProps = {
  addClass: string
}
export default function Contact({ addClass }: TProps): React.JSX.Element {
  return (
    <section className={addClass}>
      <div className={'absolute inset-0 bg-black opacity-70'}></div>
      <h2
        className={
          'text-[clamp(2.2rem,4vw,6rem)] leading-[1.25] break-keep text-white text-center z-10'
        }
      >
        나와 우리 병원을 위한 청구 서비스
        <br />
        지금 바로 문의주세요.
      </h2>
      <button className={'btn mt-[12px] z-10'}>문의하기</button>
    </section>
  )
}
