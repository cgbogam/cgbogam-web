import { TDrugItem } from '@/app/(pages)/dm/types'

export const CONTENTS: {
  drags: TDrugItem[]
  case: {
    two: string[]
    three: string[]
  }
} = {
  drags: [
    {
      id: 1,
      parentId: 0,
      name: 'Metformin',
      subName: '',
      items: [],
    },
    {
      id: 2,
      parentId: 0,
      name: 'Sulfonylurea',
      subName: '',
      items: [],
    },
    {
      id: 3,
      parentId: 0,
      name: 'Meglitinide',
      subName: '',
      items: [],
    },
    {
      id: 4,
      parentId: 0,
      name: 'a-glucosidaseinhinitor',
      subName: '',
      items: [],
    },
    {
      id: 5,
      parentId: 0,
      name: 'Thiazolidinedione',
      subName: '',
      items: [],
    },
    {
      id: 6,
      parentId: 0,
      name: 'DPP-4 inhibitor',
      subName: '',
      items: [],
    },
    {
      id: 7,
      parentId: 0,
      name: 'SGLT-2 inhibitor',
      subName: '',
      items: [],
    },
    {
      id: 8,
      parentId: 7,
      name: 'dapagliflozin',
      subName: '',
      items: [],
    },
    {
      id: 9,
      parentId: 7,
      name: 'ipragliflozin',
      subName: '',
      items: [],
    },
    {
      id: 10,
      parentId: 7,
      name: 'empagliflozin',
      subName: '',
      items: [],
    },
    {
      id: 11,
      parentId: 7,
      name: 'ertuglifrogin',
      subName: '',
      items: [],
    },
    {
      id: 12,
      parentId: 7,
      name: 'enavogliflozin',
      subName: '',
      items: [],
    },
  ],
  case: {
    two: [
      '1,2',
      '1,3',
      '1,4',
      '1,5',
      '1,6',
      '1,8',
      '1,9',
      '1,10',
      '1,11',
      '1,12',
      '2,4',
      '2,5',
      '2,6',
      '2,8',
      '2,9',
      '2,10',
      '2,11',
      '3,4',
      '3,5',
      '5,6',
    ],
    three: ['1,6,8', '1,6,9', '1,6,10', '1,6,11', '1,6,12', '1,5,8', '1,5,9', '1,5,10'],
  },
} as const
