export default function MainBanner() {
  const bgImageClass = `bg-[url('https://cgbogam.github.io/cgbogam-web/assets/main-banner-mo.jpg')] tablet:bg-[url('https://cgbogam.github.io/cgbogam-web/assets/main-banner-pc.jpg')] bg-no-repeat bg-center bg-cover`

  return (
    <section
      className={`relative h-[calc(100vh)] flex justify-start items-center mx-auto tablet:px-48 ${bgImageClass} snap-start`}
    >
      <div className={'absolute inset-0 bg-black opacity-70'} />
      <div
        className={
          'relative flex flex-col text-white z-10 text-center mx-auto tablet:mx-0 tablet:text-left'
        }
      >
        <h2 className={'text-[clamp(1.6rem,4vw,4.5rem)] leading-[1.25]'}>
          찾기 힘들었던{' '}
          <strong className={'text-blue-400 text-[clamp(2.0rem,5.3vw,8rem)]'}>청구 정보</strong>
          ,
          <br />
          간편하게 찾아보고 싶으신가요?
        </h2>
        <div
          className={
            'mt-[16px] text-[clamp(1rem,1.6vw,2.4rem)] mx-auto tablet:max-w-none tablet:mx-0'
          }
        >
          <span
            className={
              'underline decoration-2 underline-offset-4 text-[clamp(1.4rem,2.0vw,2.8rem)] mr-[4px] leading-[2rem] text-blue-400 font-bold'
            }
          >
            DIY 청구
          </span>
          는 <br className={'inline-block tablet:hidden'} />
          청구와 관련된 정보를 무료로 제공합니다.
        </div>
      </div>
    </section>
  )
}
