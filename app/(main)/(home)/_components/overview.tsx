import React from 'react'
import OverviewItem from './overview-item'
import image1 from '@/public/assets/home/image-1.png'
import image2 from '@/public/assets/home/image-2.png'
import image3 from '@/public/assets/home/image-3.png'
type Props = {}

export default function Overview({}: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        <OverviewItem 
            image={image1}
            title= 'Sana en uygun doktoru bul'
            description='Doktorlarımızın profillerini inceleyin ve size en uygun doktoru seçin.'
        />
        <OverviewItem 
            image={image2}
            title= 'Randevu al'
            description='Doktorunuzun uygun olduğu tarihi seçin ve hemen randevunuzu alın.'
        />
        <OverviewItem
            image={image3}
            title= 'Sağlığınızı takip edin'
            description='Randevunuzu aldıktan sonra sağlık durumunuzu takip edin ve sağlıklı kalın.'
        />
    </div>
)
}