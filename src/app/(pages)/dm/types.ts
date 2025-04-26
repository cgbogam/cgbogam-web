export type TDrug = {
  id: number
  parentId: number
  name: string
  subName?: string
}

export type TDrugItem = TDrug & {
  items?: TDrug[]
}

export type TDrugCaseType = 'two' | 'three'
