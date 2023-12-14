export default function Home() {
  const bgImageClass = `bg-[url('https://cgbogam.github.io/cgbogam-web/assets/main-banner-mo.jpg')] tablet:bg-[url('https://cgbogam.github.io/cgbogam-web/assets/main-banner-pc.jpg')] bg-no-repeat bg-center bg-cover`

  return (
    <main className={'w-full'}>
      {/* 메인 배너*/}
      <section
        className={`relative h-[calc(100vh_-_64px)] flex justify-start items-center min-w-[300px] mx-auto px-[32px] ${bgImageClass}`}
      >
        <div className={'absolute inset-0 bg-black opacity-60'}></div>
        <div
          className={
            'relative flex flex-col text-white z-10 text-center mx-auto tablet:mx-0 tablet:text-left'
          }
        >
          <h2 className={'text-[clamp(1.6rem,6vw,4.5rem)]'}>
            우리병원{' '}
            <strong className={'text-amber-600 text-[clamp(2.0rem,6.3vw,4.8rem)]'}>진료비</strong>가
            <br /> 누락되고있지 않나요?
          </h2>
          <p className={'mt-[32px] text-[clamp(1rem,3vw,4.5rem)] tablet:max-w-none'}>
            <span
              className={
                'underline decoration-2 underline-offset-4 text-[clamp(1.2rem,3.4vw,4.5rem)] mr-[4px] leading-[2rem]'
              }
            >
              청구보감
            </span>
            은 국내 최초 한방전문 심사청구 업체입니다.
          </p>
        </div>
        <p className={'relative text-[0] opacity-0'}>
          <a href="https://kr.freepik.com/free-photo/unrecognizable-female-doctor-checking-woman-s-heart-rate_5839411.htm#query=%ED%95%9C%EC%9D%98%EC%9B%90&position=4&from_view=search&track=sph&uuid=9ff6bd95-716f-4bd4-82a5-f27cc438da27">
            작가 pressfoto
          </a>
          출처 Freepik
        </p>
      </section>
    </main>
  )
}
