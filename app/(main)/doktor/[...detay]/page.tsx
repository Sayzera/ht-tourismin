"use client";
import BreadCrumb from "@/components/breadcrumb";
import Calendar from "@/components/calendar/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import ClinicCard from "../_components/clinic-card";
import DoctorDetailCard from "../_components/doctor-card";
import doctor_1 from "@/public/assets/image/doctors/doctor-5.jpg";
import DoctorInterests from "../_components/doctor-interests";
import DoctorAbout from "../_components/doctor-about";
import Education from "../_components/education";
import ExperinceInformation from "../_components/experience-information";
type Props = {};

export default function DoctorDetail({}: Props) {
  const breadcrumbs = [
    {
      name: "Anasayfa",
      url: "/",
    },
    {
      name: "Beyin ve Sinir Cerrahisi",
      url: "/",
    },
    {
      name: "Ankara",
      url: "/",
    },
    {
      name: "Sezer Bölük",
      url: "/",
    },
  ];

  const doctor = 
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
      onClick: () => {},
      lastComment: "“Sezer Bey'e çok teşekkür ederim. İlgili ve alakalı bir doktor. Tedavimden çok memnun kaldım. Kendisine çok teşekkür ederim.“"
    };

  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-4 md:py-0 ">
      <div className="pt-5 px-5 ">
        <BreadCrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-7 px-5 pb-10">
        <div className="col-span-12 md:col-span-7">
          <DoctorDetailCard {...doctor} />

          <DoctorInterests />

          <DoctorAbout />

          <Education/>

          <ExperinceInformation />
        </div>
        <div className="col-span-12 md:col-span-5 relative">
            <ClinicCard />
            <Calendar />
        </div>
      </div>
    </div>
  );
}
