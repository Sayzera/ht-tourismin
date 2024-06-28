import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {}

export default function SearchedKeywords({}: Props) {
  return (
    <div className='mb-4 flex items-center space-x-2'>
        <div className='h-[50px] flex items-center bg-white px-2 rounded-md relative'>
          <span className='text-base text-zinc-600'>
             Kadın Hastalıkları ve Doğum
          </span>
          <IoIosCloseCircleOutline className='text-zinc-600 w-6 h-6 absolute -top-2 -right-1 cursor-pointer'/>
        </div>
        <div className='h-[50px] flex items-center bg-white px-2 rounded-md relative'>
          <span className='text-base text-zinc-600'>
            Ankara
          </span>
          <IoIosCloseCircleOutline className='text-zinc-600 w-6 h-6 absolute -top-2 -right-1 cursor-pointer'/>
          
        </div>
        <div className='h-[50px] flex items-center bg-white px-2 rounded-md'>
          <span className=' text-zinc-600 text-sm'>
            28 uzman bulundu
          </span>
        </div>
    </div>
  )
}