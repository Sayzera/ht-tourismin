'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react'


type Props = {}

export default function ClinicCard({}: Props) {
  return (
    <Card className='p-4 mb-4'>
       <span className='font-semibold text-lg'> Prof. Dr Sezer Bölük Kliniği</span>
       <p className='text-zinc-600 text-sm'>
        Yeni Mahalle Mah. Abdulhalik Renda Cad. Hacı Nazım Apt.No:24/1, Pendik / İstanbul
       </p>
       <Separator className='mt-2' />
       <p className='text-sm text-zinc-500 mt-2'>
       Randevu oluşturabilmek için randevu takviminden uygun tarih ve saat aralığını seçebilirsiniz.
       </p>
    </Card>
  )
}