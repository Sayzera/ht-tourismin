"use client";

import React from "react";
import DoctorItem from "./doctor-item";
import DoctorsMap from "./doctors-map";

import doctor_1 from '@/public/assets/image/doctors/doctor-4.jpg';
import doctor_2 from '@/public/assets/image/doctors/doctor-5.jpg';
import doctor_3 from '@/public/assets/image/doctors/doctor-6.jpg';

type Props = {};

// image: StaticImageData;
// title: string;
// name: string;
// speciality: string;
// rating: number;
// viewCount: number;
// location?: string;
// ratingTitle: string;
// onClick?: () => void;
// address: string;
// whenItIsConvenient: string;
// whenItIsConvenientDate: string[]

const doctors = [
  {
    image: doctor_3,
    speciality: "Beyin ve Sinir Cerrahisi",
    title: "Op. Dr.",
    name: "Sezer Bölük",
    rating: 9.8,
    viewCount: 1243,
    location: "Ankara",
    ratingTitle: "Mükemmel",
    address: "Zuhuratbaba, Yüce Tarla Cd. No:46",
    whenItIsConvenient: "28 Haziran 2024 Cuma 12:30",
    whenItIsConvenientDate: ["12:30", "13:30", "14:30", "15:30", "16:30"],
    onclick: () => {}
  },
  {
    image: doctor_2,
    speciality: "Kulak Burun Boğaz",
    title: "Op. Dr.",
    name: "Abdullah Savran",
    rating: 9.8,
    viewCount: 1243,
    location: "Ankara",
    ratingTitle: "Mükemmel",
    address: "Zuhuratbaba, Yüce Tarla Cd. No:46",
    whenItIsConvenient: "3 Temmuz 2024 Cuma 12:30",
    whenItIsConvenientDate: ["14:30", "15:30", "16:30"],
    onclick: () => {}
  },
  {
    image: doctor_1,
    speciality: "Göz Hastalıkları",
    title: "Op. Dr.",
    name: "Aleyna Ay",
    rating: 9.8,
    viewCount: 1243,
    location: "Ankara",
    ratingTitle: "Mükemmel",
    address: "Zuhuratbaba, Yüce Tarla Cd. No:46",
    whenItIsConvenient: "28 Haziran 2024 Cuma 12:30",
    whenItIsConvenientDate: ["12:30", "13:30", "14:30", "15:30", "16:30"],
    onclick: () => {}
  
  }
];

export default function DoctorList({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4">
      <div
        className="
            col-span-1 md:col-span-8
        "
      >
        {
          doctors.map((doctor, index) => (
            <DoctorItem 
              key={'doctor'+index}
              image={doctor.image}
              title={doctor.title}
              name={doctor.name}
              speciality={doctor.speciality}
              rating={doctor.rating}
              viewCount={doctor.viewCount}
              location={doctor.location}
              ratingTitle={doctor.ratingTitle}
              address={doctor.address}
              whenItIsConvenient={doctor.whenItIsConvenient}
              whenItIsConvenientDate={doctor.whenItIsConvenientDate}
            />
          ))
        }
      
      </div>

      <div className="col-span-1 md:col-span-4">
        <DoctorsMap />
      </div>
    </div>
  );
}
