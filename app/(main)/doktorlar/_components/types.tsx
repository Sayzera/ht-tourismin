'use client'
import React from 'react'

type Props = {}

export default function Types({}: Props) {
  return (
    <div className="flex items-center ">
      <div
        className="w-full md:w-[80px] h-[30px] bg-blue-500 flex items-center justify-center text-white  border border-1 border-gray-300 text-sm cursor-pointer 
      hover:bg-blue-600  hover:text-white
      "
      >
        <span>Tümü</span>
      </div>
      <div
        className="w-full md:w-[80px] h-[30px] flex items-center justify-center text-zinc-700  border border-1 border-gray-300 text-sm cursor-pointer
        hover:bg-blue-600  hover:text-white
      "
      >
        <span>Uzmanlar</span>
      </div>
      <div
        className="w-full md:w-[80px] h-[30px] flex items-center justify-center text-zinc-700   border border-1 border-gray-300 text-sm cursor-pointer
        hover:bg-blue-600 hover:text-white
      "
      >
        <span>Kilinkler</span>
      </div>
    </div>
  )
}