'use client'
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DoctorCard, { DoctorCardsProps } from "./doctor-card";
import doctor_1 from "@/public/assets/doctors/doctor-1.png";
import doctor_2 from "@/public/assets/doctors/doctor-2.png";
import doctor_3 from "@/public/assets/doctors/doctor-3.png";
type Props = {};

const OurHighestRatedDoctors = (props: Props) => {

  const doctors = [
    {
      name: 'Sezer Bölük',
      speciality: 'Prof. Dr.',
      title: 'Beyin ve Sinir Cerrahisi',
      rating: 9.5,
      ratingTitle: 'Mükemmel',
      viewCount: 1250,
      location: 'Ankara',
      specialities: ['Nöroloji', 'Nöroşirurji'],
      image: doctor_1,
      onClick: () => {}
    },
    {
      name: 'Abdullah Savran',
      speciality: 'Prof. Dr.',
      title: 'Kulak Burun Boğaz',
      rating: 9.2,
      ratingTitle: 'Mükemmel',
      viewCount: 953,
      location: 'İstanbul',
      image: doctor_2,
      specialities: ['Otoloji ve Nörootoloji', 'Rinoloji', 'Laringoloji'],
      onClick: () => {}
    },
    {
      name: 'Aleyna Ay',
      speciality: 'Prof. Dr.',
      title : 'Diş Hekimliği',
      rating: 9.0,
      ratingTitle: 'Mükemmel',
      viewCount: 764,
      location: 'İzmir',
      image: doctor_3,
      specialities: ['Ortodonti', 'Estetik Diş Hekimliği'],
      onClick: () => {}


    }
  ]
  

  return (
    <div>
      <span className="title">
        En yüksek puanlı doktorlarımıza bir göz atın
      </span>
      <div className="px-0 mt-5">
        <Carousel>
          <CarouselContent>
            {
              doctors?.map((doctor:DoctorCardsProps, index:number) => {
                return (
                  <CarouselItem key={index} className="md:basis-1/3">
                    <DoctorCard 
                      name={doctor.name}
                      speciality={doctor.speciality}
                      title={doctor.title}
                      rating={doctor.rating}
                      ratingTitle={doctor.ratingTitle}
                      viewCount={doctor.viewCount}
                      location={doctor.location}
                      specialities={doctor.specialities}
                      image={doctor.image}
                      onClick={doctor.onClick}
                    />
                  </CarouselItem>
                )
              })
            
            }
            </CarouselContent >
            <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      </div>
    </div>
  );
};

export default OurHighestRatedDoctors;
