export default function MainBanner() {
  const bgImageClass = `bg-[url('https://cgbogam.github.io/cgbogam-web/assets/main-banner-mo.jpg')] tablet:bg-[url('https://cgbogam.github.io/cgbogam-web/assets/main-banner-pc.jpg')] bg-no-repeat bg-center bg-cover`

  return (
    <section
      className={`relative h-[calc(100vh_-_64px)] flex justify-start items-center mx-auto tablet:px-[80px] ${bgImageClass} snap-start`}
    >
      <div className={'absolute inset-0 bg-black opacity-70'}></div>
      <div
        className={
          'relative flex flex-col text-white z-10 text-center mx-auto tablet:mx-0 tablet:text-left'
        }
      >
        <h2 className={'text-[clamp(1.6rem,4vw,4.5rem)] leading-[1.25]'}>
          우리 병원{' '}
          <strong className={'text-amber-600 text-[clamp(2.0rem,5.3vw,8rem)]'}>진료비</strong>,
          <br />잘 받고 있는지 궁금하신가요?
        </h2>
        <p
          className={
            'mt-[16px] text-[clamp(1rem,1.6vw,2.4rem)] mx-auto tablet:max-w-none tablet:mx-0'
          }
        >
          <span
            className={
              'underline decoration-2 underline-offset-4 text-[clamp(1.4rem,2.0vw,2.8rem)] mr-[4px] leading-[2rem] text-amber-600 font-bold'
            }
          >
            ㈜청구보감
          </span>
          은 <br className={'inline-block tablet:hidden'} />
          국내 첫 한방 전문 청구 업체입니다.
          <p className={'mt-[8px]'}>언제든지 무료로 청구 분석 컨설팅 도와드립니다.</p>
        </p>
      </div>
      <p className={'relative text-[0] opacity-0'}>
        <a href="https://kr.freepik.com/free-photo/unrecognizable-female-doctor-checking-woman-s-heart-rate_5839411.htm#query=%ED%95%9C%EC%9D%98%EC%9B%90&position=4&from_view=search&track=sph&uuid=9ff6bd95-716f-4bd4-82a5-f27cc438da27">
          작가 pressfoto
        </a>
        출처 Freepik
      </p>
    </section>
  )
}
