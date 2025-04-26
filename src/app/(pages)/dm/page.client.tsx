'use client'
import React, { Fragment, useMemo, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { CONTENTS } from '@/app/(pages)/dm/data'
import { Checkbox } from '@/components/ui/checkbox'

export default function DMClient() {
  const [caseType, setCaseType] = useState<string>('two')

  const selectDragList = useMemo(() => {
    const categories = CONTENTS.drags.filter((d) => d.parentId === 0)
    const items = CONTENTS.drags.filter((d) => d.parentId !== 0)
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
  const [groupCheckedValues, setGroupCheckedValues] = useState<number[]>([])

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

      console.log('#### caseThree :: ', caseThree)
      console.log('#### checkedThreeCaseText :: ', checkedThreeCaseText)

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
    <div className={'p-3'}>
      <h1>당뇨약 조합 : {checkedValues.toString()}</h1>
      <div>
        <RadioGroup
          className={'flex items-center justify-start'}
          defaultValue="two"
          value={caseType}
          onValueChange={(val) => {
            setGroupCheckedValues([])
            setCheckedValues([])
            setCaseType(val)
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="two" id="option-one" />
            <Label htmlFor="option-one">2제 요법</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="three" id="option-two" />
            <Label htmlFor="option-two">3제 요법</Label>
          </div>
        </RadioGroup>
      </div>
      <div className={'pt-3 space-y-2'}>
        {selectDragList.map((selectDrag) => (
          <Fragment key={selectDrag.id}>
            {/* 카테고리 */}
            <div className="items-top flex space-x-2">
              {selectDrag.items && selectDrag.items.length === 0 ? (
                <Checkbox
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
                <div className={'rounded-[4px] bg-gray-500 p-[8px]'} />
              )}
              <label
                htmlFor={selectDrag.id + ''}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-disabled:text-gray-500`}
              >
                {selectDrag.name}
              </label>
            </div>

            {/* 아이템 */}
            {selectDrag?.items?.map((item) => (
              <div key={`${item.id}`} className="items-top flex space-x-2 ml-6">
                <Checkbox
                  id={item.id + ''}
                  checked={checkedValues.includes(item.id)}
                  disabled={!checkedValues.includes(item.id) && checkedValues.length === limit}
                  onCheckedChange={(val) => {
                    if (val) {
                      setCheckedValues((prev) => [...prev, item.id])
                    } else {
                      setCheckedValues((prev) => prev.filter((prevItem) => prevItem !== item.id))
                    }
                  }}
                />
                <label
                  htmlFor={item.id + ''}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-disabled:text-gray-500"
                >
                  {item.name}
                </label>
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className={'pt-3'}>
        <h2 className={'text-[24px]'}>결과</h2>
        <ul>
          {result.map((item) => (
            <li key={item.id} className={'flex items-center justify-start gap-x-[16px]'}>
              {item.checkedDragNames.map((drag) => (
                <span key={drag.id}>{drag.name}</span>
              ))}
              <span>{item.result ? '인정' : '불인정'}</span>
            </li>
          ))}
        </ul>
      </div>

      {/*<pre className={'text-[10px]'}>{JSON.stringify(CONTENTS, null, 2)}</pre>*/}
    </div>
  )
}
