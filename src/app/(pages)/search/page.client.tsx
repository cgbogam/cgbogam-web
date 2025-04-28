'use client'
import React, { useEffect, useState } from 'react'
import { searchData } from '@/app/(pages)/search/data'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import axios from 'axios'

export default function SearchClient() {
  const [tableData, setTableData] = useState<any>([])
  const [tableHeaders, setTableHeaders] = useState<any>([])

  const table = useReactTable({
    data: tableData,
    columns: tableHeaders,
    getCoreRowModel: getCoreRowModel(),
  })

  // useEffect(() => {
  //   axios.get('https://sheets.googleapis.com/v4/spreadsheets/1OYpgFa7AjRUVrn8As0ama9MVRFzpttTpY4zI5Oq73l4/values/search?key=AIzaSyDER2ftBTJp8Ucba9JdzNlFyKPFkvPcA90').then((res)=>{
  //     const newData = structuredClone(res.data.values)
  //     const header = newData.shift()
  //     const body = newData
  //
  //     const headers = header?.map((item: any, idx: any) => ({
  //       accessorKey: `header-${idx}`,
  //       header: item
  //     } as ColumnDef<any>))
  //
  //     const contents = body?.map((item: any, idx: any) => {
  //       const bodyItem: any = {}
  //       item.forEach((t: any, tIdx: any)=>{
  //         bodyItem[`header-${tIdx}`] = t
  //       })
  //       return bodyItem
  //     })
  //
  //     setTableHeaders(()=> headers)
  //     setTableData(()=> contents)
  //   }).catch((e)=>{
  //     console.log(e)
  //   })
  // }, [])

  useEffect(() => {
    const newData = structuredClone(searchData.values)
    const header = newData.shift()
    const body = newData

    const headers = header?.map(
      (item: any, idx: any) =>
        ({
          accessorKey: `header-${idx}`,
          header: item,
        }) as ColumnDef<any>,
    )

    const contents = body?.map((item: any, idx: any) => {
      const bodyItem: any = {}
      item.forEach((t: any, tIdx: any) => {
        bodyItem[`header-${tIdx}`] = t
      })
      return bodyItem
    })

    setTableHeaders(() => headers)
    setTableData(() => contents)
  }, [])

  return (
    <div className={'p-3'}>
      <h1>조회 테스트</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={tableHeaders.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <pre className={'text-[10px]'}>{JSON.stringify(tableData, null, 2)}</pre>
    </div>
  )
}
