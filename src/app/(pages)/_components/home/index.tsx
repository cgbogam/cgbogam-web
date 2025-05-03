import React from 'react'
import MainBanner from '@/app/(pages)/_components/home/components/MainBanner'
import Info from '../../../../../public/assets/banner-information.svg'
import Late from '../../../../../public/assets/banner-late.svg'

export default function HomeComponent() {
  const SECTION_PADDING = `px-[24px] tablet:px-48 py-[calc(12vh)]`
  const SECTION_CLASS = [
    SECTION_PADDING,
    'w-full flex flex-col tablet:flex-row justify-between items-center gap-[16px] snap-start',
  ].join(' ')

  return (
    <>
      <MainBanner />
      <div className={[SECTION_CLASS].join(' ')}>
        <div className={'text-gray-900 text-center tablet:text-left'}>
          <h2 className={'text-[clamp(2.2rem,4vw,6rem)] leading-[1.25] break-keep'}>
            당뇨약 조합이 궁금하신가요?
          </h2>
          <div
            className={'mt-[8px] tablet:mt-[16px] text-[clamp(1.4rem,2.0vw,2.8rem)] text-gray-600'}
          >
            2제요법, 3제요법 당뇨약을 선택하여
            <br /> 인정/불인정을 확인해 보세요
          </div>
        </div>
        <div>
          <Info className={'w-[80vw] max-w-[300px]'} />
        </div>
      </div>
      <div className={[SECTION_CLASS].join(' ')}>
        <div className={'text-gray-900 text-center tablet:text-left'}>
          <h2 className={'text-[clamp(2.2rem,4vw,6rem)] leading-[1.25] break-keep'}>
            필요한 기능이 없으신가요?
          </h2>
          <div
            className={'mt-[8px] tablet:mt-[16px] text-[clamp(1.4rem,2.0vw,2.8rem)] text-gray-600'}
          >
            기능은 지속적으로 추가될 예정입니다
          </div>
        </div>
        <div>
          <Late className={'w-[80vw] max-w-[300px]'} />
        </div>
      </div>
    </>
  )
}
