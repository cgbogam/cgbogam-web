import { TDrugItem } from '@/app/(pages)/search/types'

const MAPPING_ENUM: any = {
  0: 'serialNumberId',
  1: 'drugClassificationId',
  2: 'ingredientCode',
  3: 'productCode',
  4: 'productName',
  5: 'companyName',
  6: 'atcCode',
  7: 'atcCodeName',
  8: 'remarks',
} as const

export const VISIBLE_KEY_NAMES = ['productCode', 'productName', 'atcCode', 'atcCodeName', 'remarks']

export const convertExcelHeader = (header: string[]) => {
  const headers: TDrugItem = {
    serialNumberId: '',
    drugClassificationId: '',
    ingredientCode: '',
    productCode: '',
    productName: '',
    companyName: '',
    atcCode: '',
    atcCodeName: '',
    remarks: '',
  }
  header.forEach((h, hIdx) => {
    const keyName = MAPPING_ENUM[hIdx] as keyof TDrugItem
    headers[keyName] = h
  })
  return headers
}

export const convertExcelData = (excel: string[][]) => {
  return excel?.map((row: string[]) => {
    const bodyItem: TDrugItem = {
      serialNumberId: '',
      drugClassificationId: '',
      ingredientCode: '',
      productCode: '',
      productName: '',
      companyName: '',
      atcCode: '',
      atcCodeName: '',
      remarks: '',
    }
    row.forEach((col: string, colIdx: any) => {
      const keyName = MAPPING_ENUM[colIdx] as keyof TDrugItem
      bodyItem[keyName] = col
    })
    return bodyItem
  })
}

export const getHeader = (header: string[]) => {}
