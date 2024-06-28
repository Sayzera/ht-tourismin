'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

type Props = {
    title: string;
    count: number;
}

export default function DoctorResultCount({
    title,
    count
}: Props) {
  return (
    <Card className="mb-3">
    <CardContent className="p-0 h-[60px] flex items-center px-4">
      <div className="md:flex md:items-end md:space-x-2">
        <p className="md:title text-base font-semibold">
        {title}
        </p>
        <p className="text-sm md:text-base text-gray-800 ">
          {count} uzman bulundu
        </p>
      </div>
    </CardContent>
  </Card>
  )
}