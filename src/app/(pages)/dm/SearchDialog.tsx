import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { convertExcelData } from '@/app/(pages)/search/func'
import { TDrugItem } from '@/app/(pages)/search/types'
import { Input } from '@/components/ui/input'
import axios from 'axios'

interface Props {
  isOpen: boolean
  close: () => void
}

export function SearchDialog(props: Props) {
  const { isOpen, close } = props

  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const originData = useRef<any>([])
  const [filterdData, setFilterdData] = useState<TDrugItem[]>([])

  const handleFilterContents = useCallback(() => {
    const cloneData = structuredClone(originData.current)
    const filterData = cloneData.filter(
      (item: TDrugItem) =>
        item.productName.includes(searchKeyword) || item.productCode.includes(searchKeyword),
    )

    setFilterdData(() => filterData)
  }, [searchKeyword, originData])

  useEffect(() => {
    if (isOpen) {
      axios
        .get(
          'https://sheets.googleapis.com/v4/spreadsheets/1OYpgFa7AjRUVrn8As0ama9MVRFzpttTpY4zI5Oq73l4/values/search?key=AIzaSyDER2ftBTJp8Ucba9JdzNlFyKPFkvPcA90',
        )
        .then((res) => {
          const newData = structuredClone(res.data.values)
          const header = newData.shift()
          const body = newData

          originData.current = convertExcelData(newData)
        })
        .catch((e) => {
          setSearchKeyword('')
          setFilterdData([])
        })
    } else {
      setSearchKeyword('')
      setFilterdData([])
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen}>
      <DialogContent className="w-full max-w-[1000px] h-full max-h-[800px] z-[100000] flex flex-col">
        <DialogHeader className={'relative h-[36px]'}>
          <DialogTitle className={'h-[36px] flex items-center justify-center'}>
            당뇨약 검색{filterdData.length > 0 ? ` (${filterdData.length}개)` : ''}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className={'absolute right-0 top-0 cursor-pointer'}
            onClick={() => close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </Button>
        </DialogHeader>
        <div>
          <div className={'flex items-center justify-center'}>
            <Input
              className={'rounded-r-none'}
              value={searchKeyword}
              autoFocus={true}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.nativeEvent.isComposing) {
                  return
                }
                if (e.key === 'Enter') {
                  handleFilterContents()
                }
              }}
            />
            <Button
              variant="outline"
              size="icon"
              className={'rounded-l-none border-l-0'}
              onClick={() => handleFilterContents()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className={'flex-1 space-y-4 overflow-y-auto'}>
          <ul className={'relative w-full space-y-2'}>
            {filterdData.map((item) => (
              <li
                key={item.serialNumberId}
                className={'shadow-md border border-blue-200 py-3 px-3 rounded-sm space-y-1.5'}
              >
                <div className={'flex items-start justify-start gap-2'}>
                  <span className={'shrink-0 w-[100px] font-semibold'}>제품명/(코드)</span>
                  <span className={''}>
                    {item.productName} / ({item.productCode})
                  </span>
                </div>
                <div className={'flex items-start justify-start gap-2'}>
                  <span className={'shrink-0 w-[100px] font-semibold'}>성분명</span>
                  <span className={''}>{item.atcCodeName}</span>
                </div>
                <div className={'flex items-start justify-start gap-2'}>
                  <span className={'shrink-0 w-[100px] font-semibold'}>성분군</span>
                  <span className={''}>{item.remarks}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
