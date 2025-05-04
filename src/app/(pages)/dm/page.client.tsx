'use client'
import React, { Fragment, useMemo, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { CONTENTS } from '@/app/(pages)/dm/data'
import { Checkbox } from '@/components/ui/checkbox'

export default function DMClient() {
  const [caseType, setCaseType] = useState<string>('two')

  const selectDragList = useMemo(() => {
    const drags = structuredClone(CONTENTS.drags)
    const categories = drags.filter((d) => d.parentId === 0)
    const items = drags.filter((d) => d.parentId !== 0)
    items.forEach((item) => {
      const cIndex = categories.findIndex((c) => c.id === item.parentId)
      categories[cIndex]?.items?.push(item)
    })
    return categories
  }, [])

  const limit = useMemo(() => {
    if (caseType === 'two') {
      return 2
    } else if (caseType === 'three') {
      return 3
    } else {
      return 1
    }
  }, [caseType])

  const [checkedValues, setCheckedValues] = useState<number[]>([])

  const result = useMemo(() => {
    if (checkedValues.length !== limit) {
      return []
    }

    const caseTwo = CONTENTS.case.two

    if (caseType === 'two') {
      const checkedCaseIds = checkedValues.sort((a, b) => a - b)
      const checkedCaseText = checkedCaseIds.toString()
      const checkedDrags = CONTENTS.drags.filter((d) => checkedValues.includes(d.id))
      const isIncludeCases = caseTwo.includes(checkedCaseText)
      return [{ id: 0, checkedDragNames: checkedDrags, result: isIncludeCases }]
    } else if (caseType === 'three') {
      const caseThree = CONTENTS.case.three
      const checkedCaseIds = checkedValues.sort((a, b) => a - b)

      // 예외체크 먼저
      const checkedThreeCaseText = checkedCaseIds.toString()
      const checkedDrags = CONTENTS.drags.filter((d) => checkedCaseIds.includes(d.id))
      const isIncludeThreeCases = caseThree.includes(checkedThreeCaseText)

      if (isIncludeThreeCases) {
        return [{ id: 0, checkedDragNames: checkedDrags, result: isIncludeThreeCases }]
      } else {
        const getPairs = (numbers: number[]) => {
          const result: number[][] = []
          for (let i = 0; i < numbers.length - 1; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
              result.push([checkedCaseIds[i], checkedCaseIds[j]])
            }
          }
          return result
        }

        const pairs = getPairs(checkedCaseIds)
        return pairs.map((item, idx) => {
          const checkedDrags = CONTENTS.drags.filter((d) => item.includes(d.id))
          const checkedCaseText = item.toString()
          const isIncludeCases = caseTwo.includes(checkedCaseText)
          return { id: idx, checkedDragNames: checkedDrags, result: isIncludeCases }
        })
      }
    } else {
      return []
    }
  }, [checkedValues, caseType, limit])

  return (
    <div className={'pt-4 pb-12 px-4 tablet:pb-80 tablet:px-24'}>
      {/* header 영역 */}
      <div className={'flex flex-col items-start justify-start mb-8 leading-[1.25] break-keep'}>
        <div className={'flex items-end justify-start flex-wrap gap-x-4 gap-y-2'}>
          <h1 className={'!mb-0'}>당뇨약 조합</h1>
          <span className={'text-gray-600'}>고시 제2025-51호(2025.04.01시행)</span>
        </div>
        <div className={'mt-3 text-gray-700 p-2 px-3 bg-gray-100 rounded-md space-y-1'}>
          <p>
            1. DIY 청구는 순수한 공익 목적을 위해 운영되며, 어떠한{' '}
            <span className={'text-red-500'}>금전적 대가를 요구하지 않습니다.</span>
          </p>
          <p>2. 현행 고시된 내용과 상이할 수 있어, 현행 고시 내용을 확인해 주세요.</p>
        </div>
      </div>

      {/* 선택 영역 */}
      <div className={'grid grid-cols-1 tablet:grid-cols-3 gap-y-4 tablet:gap-x-4'}>
        <div className={'col-span-1 flex flex-col'}>
          <h2
            className={'text-[24px] font-medium flex items-center justify-start pb-3 min-w-[300px]'}
          >
            조합 선택
          </h2>
          <div
            className={'w-full rounded-md border border-gray-300 shadow-sm p-4 space-y-4 flex-1'}
          >
            <div className={'space-y-2'}>
              <p className={'text-xl text-blue-800 font-semibold border-b border-gray-200 pb-2'}>
                요법
              </p>
              <RadioGroup
                className={'flex items-center justify-start'}
                defaultValue="two"
                value={caseType}
                onValueChange={(val) => {
                  setCheckedValues([])
                  setCaseType(val)
                }}
              >
                <div className="flex items-center gap-x-2">
                  <RadioGroupItem
                    className={'h-5 w-5'}
                    circleClassName={'h-4 w-4'}
                    value="two"
                    id="option-one"
                  />
                  <Label className={'text-lg cursor-pointer'} htmlFor="option-one">
                    2제 요법
                  </Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <RadioGroupItem
                    className={'h-5 w-5'}
                    circleClassName={'h-4 w-4'}
                    value="three"
                    id="option-two"
                  />
                  <Label className={'text-lg cursor-pointer'} htmlFor="option-two">
                    3제 요법
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className={'space-y-2'}>
              <p className={'text-xl text-blue-800 font-semibold border-b border-gray-200 pb-2'}>
                당뇨약
              </p>
              <div className={'py-3 space-y-2'}>
                {selectDragList.map((selectDrag) => (
                  <Fragment key={selectDrag.id}>
                    {/* 카테고리 */}
                    <div className="items-center flex gap-x-2">
                      {selectDrag.items && selectDrag.items.length === 0 ? (
                        <Checkbox
                          className={'h-5 w-5'}
                          id={selectDrag.id + ''}
                          checked={checkedValues.includes(selectDrag.id)}
                          disabled={
                            !checkedValues.includes(selectDrag.id) && checkedValues.length === limit
                          }
                          onCheckedChange={(val) => {
                            if (val) {
                              setCheckedValues((prev) => [...prev, selectDrag.id])
                            } else {
                              setCheckedValues((prev) =>
                                prev.filter((prevItem) => prevItem !== selectDrag.id),
                              )
                            }
                          }}
                        />
                      ) : (
                        <div className={'relative rounded-[4px] bg-gray-300 p-[10px]'}>
                          <div
                            className={
                              'w-[60%] h-[2px] bg-gray-100 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
                            }
                          ></div>
                        </div>
                      )}
                      <label
                        htmlFor={selectDrag.id + ''}
                        className={`font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-disabled:text-gray-500 cursor-pointer`}
                      >
                        {selectDrag.name}
                      </label>
                    </div>

                    {/* 아이템 */}
                    {selectDrag?.items?.map((item) => (
                      <div key={`${item.id}`} className="items-center flex gap-x-2 ml-6">
                        <Checkbox
                          id={item.id + ''}
                          className={'h-5 w-5'}
                          checked={checkedValues.includes(item.id)}
                          disabled={
                            !checkedValues.includes(item.id) && checkedValues.length === limit
                          }
                          onCheckedChange={(val) => {
                            if (val) {
                              setCheckedValues((prev) => [...prev, item.id])
                            } else {
                              setCheckedValues((prev) =>
                                prev.filter((prevItem) => prevItem !== item.id),
                              )
                            }
                          }}
                        />
                        <label
                          htmlFor={item.id + ''}
                          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-disabled:text-gray-500 cursor-pointer"
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={'col-span-2 flex flex-col'}>
          <h2
            className={'text-[24px] font-medium flex items-center justify-start pb-3 min-w-[300px]'}
          >
            결과
          </h2>
          <div
            className={'w-full rounded-md border border-gray-300 shadow-sm p-4 space-y-4 flex-1'}
          >
            {result.length === 0 && (
              <p className={'px-4 py-2 text-gray-500 text-lg'}>조합을 선택해 주세요.</p>
            )}
            {result.length > 0 && (
              <ul>
                {result.map((item) => (
                  <li
                    key={item.id}
                    className={
                      'flex items-center justify-between text-lg border-b border-gray-200 last:border-b-0 px-4 py-2 gap-x-4'
                    }
                  >
                    <div className={'flex items-center justify-start flex-wrap gap-y-2'}>
                      {item.checkedDragNames.map((drag, idx) => (
                        <Fragment key={drag.id}>
                          <div className={'break-all first:ml-0 ml-2'}>
                            {idx !== 0 && idx < item.checkedDragNames.length && (
                              <span className={'text-gray-300 text-[20px] mr-2'}>+</span>
                            )}
                            {drag.name}
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    <span
                      className={`whitespace-nowrap min-w-[60px] text-center ${
                        item.result ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {item.result ? '인정' : '불인정'}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/*<pre className={'text-[10px]'}>{JSON.stringify(CONTENTS, null, 2)}</pre>*/}
    </div>
  )
}
