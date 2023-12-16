'use client'
import { PropsWithChildren } from 'react'
import MainBanner from '@/app/(pages)/home/components/MainBanner'
import Info from '../../../public/assets/banner-information.svg'
import Money from '../../../public/assets/banner-money.svg'
import Late from '../../../public/assets/banner-late.svg'

type TPageClient = {}
export default function HomeClient({ children }: PropsWithChildren<TPageClient>) {
  return (
    <>
      <div className={'overflow-y-scroll h-[calc(100vh_-_64px)] snap-y snap-mandatory'}>
        <MainBanner />
        <div
          className={
            'h-[calc(100vh_-_64px)] w-full snap-start flex flex-col tablet:flex-row justify-between items-center gap-[16px] px-[24px] py-[calc(12vh)] tablet:px-[80px] bg-orange-50'
          }
        >
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
        <div
          className={
            'h-[calc(100vh_-_64px)] w-full snap-start flex flex-col tablet:flex-row justify-between items-center gap-[16px] px-[24px] py-[calc(12vh)] tablet:px-[80px] bg-orange-100'
          }
        >
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
        <div
          className={
            'h-[calc(100vh_-_64px)] w-full snap-start flex flex-col tablet:flex-row justify-between items-center gap-[16px] px-[24px] py-[calc(12vh)] tablet:px-[80px] bg-orange-200'
          }
        >
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
        <div
          className={
            "relative h-[calc(100vh_-_64px)] w-full snap-start flex flex-col justify-center items-center gap-[16px] px-[24px] py-[calc(12vh)] tablet:px-[80px] bg-black bg-[url('https://cgbogam.github.io/cgbogam-web/assets/contact.jpg')] bg-no-repeat bg-center bg-cover"
          }
        >
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
        </div>
      </div>
    </>
  )
}
