import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

export default function SortBy({}: Props) {
  return (
    <div>
      <Select>
        <SelectTrigger
          className="
          w-full 
          md:w-[200px]
        focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent className='text-zinc-700'
        "
        >
          <SelectValue placeholder="Akıllı Sıralama" className='text-zinc-700' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1" className='text-zinc-700'>Önerilen Sıralama</SelectItem>
          <SelectItem value="2" className='text-zinc-700'>Yakınımdakiler</SelectItem>
          <SelectItem value="3" className='text-zinc-700'>Çok Değerlendirilenler </SelectItem>
          <SelectItem value="4" className='text-zinc-700'>Yüksek Puanlılar</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
