import React from 'react'
import MainBanner from '@/app/(pages)/components/home/components/MainBanner'
import Info from '../../../../../public/assets/banner-information.svg'
import Money from '../../../../../public/assets/banner-money.svg'
import Late from '../../../../../public/assets/banner-late.svg'
import Footer from '@/app/(pages)/components/footer'
import Contact from '@/app/(pages)/components/home/components/Contact'

export default function HomeComponent() {
  const HEADER_HEIGHT = `64px`
  const SECTION_HEIGHT = `h-[calc(100vh_-_${HEADER_HEIGHT})]`
  const SECTION_PADDING = `px-[24px] tablet:px-[80px] py-[calc(12vh)]`
  const SECTION_CLASS = [
    SECTION_HEIGHT,
    SECTION_PADDING,
    'w-full flex flex-col tablet:flex-row justify-between items-center gap-[16px] snap-start',
  ].join(' ')

  return (
    <>
      <MainBanner />
      <div className={[SECTION_CLASS, 'bg-orange-50'].join(' ')}>
        <div className={'text-black text-center tablet:text-left'}>
          <h2 className={'text-[clamp(2.2rem,4vw,6rem)] leading-[1.25] break-keep'}>
            잦은 인력 변동으로 청구가 늦어지시나요?
          </h2>
          <div className={'mt-[8px] tablet:mt-[16px]]'}>
            - 의료인, 의료기사 등으로 꾸려진 전문 심사 인력풀을 통한 신속하고 정확한 청구를
            도와드립니다.
          </div>
        </div>
        <div>
          <Info className={'w-[80vw] max-w-[300px]'} />
        </div>
      </div>
      <div className={[SECTION_CLASS, 'bg-orange-100'].join(' ')}>
        <div className={'text-black text-center tablet:text-left'}>
          <h2 className={'text-[clamp(2.2rem,4vw,6rem)] leading-[1.25] break-keep'}>
            진료비 누락이 걱정되시나요?
          </h2>
          <div className={'mt-[8px] tablet:mt-[16px]]'}>
            - 청구분석 : 기청구건 삭감 분석 및 재심가능안내
            <br /> - 병원 수가 전체적인 분석을 통해 누락분 조회 등 무료 컨설팅 제공
          </div>
        </div>
        <div>
          <Money className={'w-[80vw] max-w-[300px]'} />
        </div>
      </div>
      <div className={[SECTION_CLASS, 'bg-orange-200'].join(' ')}>
        <div className={'text-black text-center tablet:text-left'}>
          <h2 className={'text-[clamp(2.2rem,4vw,6rem)] leading-[1.25] break-keep'}>
            잦은 인력 변동으로 청구가 늦어지시나요?
          </h2>
          <div className={'mt-[8px] tablet:mt-[16px]]'}>
            - 의료인, 의료기사 등으로 꾸려진 전문 심사 인력풀을 통한 신속하고 정확한 청구를
            도와드립니다.
          </div>
        </div>
        <div>
          <Late className={'w-[80vw] max-w-[300px]'} />
        </div>
      </div>
      <Contact
        addClass={[
          SECTION_HEIGHT,
          SECTION_PADDING,
          'w-full flex flex-col justify-center items-center gap-[16px] snap-start',
          `relative bg-[url('https://cgbogam.github.io/cgbogam-web/assets/contact.jpg')] bg-no-repeat bg-center bg-cover`,
        ].join(' ')}
      />
      <Footer />
    </>
  )
}
