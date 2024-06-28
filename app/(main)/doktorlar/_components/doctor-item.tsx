"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import doctor_4 from "@/public/assets/doctors/doctor-4.jpg";
import Image, { StaticImageData } from "next/image";
import { CiCircleCheck, CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import WhenItIsConvenient from "./when-it-is-convenient";

type Props = {
  image: StaticImageData;
  title: string;
  name: string;
  speciality: string;
  rating: number;
  viewCount: number;
  location?: string;
  ratingTitle: string;
  onClick?: () => void;
  address: string;
  whenItIsConvenient: string;
  whenItIsConvenientDate: string[]
};

export default function DoctorItem({
  image,
  title,
  name,
  speciality,
  rating,
  viewCount,
  location,
  ratingTitle,
  onClick,
  address,
  whenItIsConvenient,
  whenItIsConvenientDate,
  
  
}: Props) {
  return (
    <Card className="mb-4">
      <CardContent className="p-0 grid grid-cols-1 md:grid-cols-12">
        {/* resmi sola yasla */}
        <div className="md:col-span-4 flex items-center justify-center h-[200px] relative">
          <Image
            src={image}
            alt="doctor"
            className="object-left-top  object-cover w-full h-full"
          />

          <CiCircleCheck
            className=" text-lg 
         absolute top-2 right-2 rounded-full p-1 h-8 w-8 bg-blue-500 text-white
        "
          />
        </div>
        <div className="col-span-8 p-4 md:flex justify-between space-y-2 md:space-y-0">
          <div className="w-full space-y-2">
            <div className="text-blue-400 font-semibold  text-sm flex items-center space-x-2">
              <span>{speciality}</span>
            </div>
            <div>
              <div className="flex space-x-4">
                <div className="text-zinc-700 font-semibold  text-sm flex  items-center space-x-2">
                  <span>{title} {name}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-zinc-600  text-xs flex  items-center space-x-1">
                  <span>
                    <span className="font-bold">{rating} - {ratingTitle}</span> ({viewCount})
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:flex justify-between space-y-1 md:space-y-0">
              <div className="flex items-center space-x-1">
                <CiLocationOn className="text-blue-500 w-4 h-4" />{" "}
                <span className="text-xs">
                 {address}
                </span>
              </div>

              <div className="flex items-center md:space-x-1">
                <FaLocationDot className="text-blue-500 w-4 h-4 hidden md:block" />

                <span className="text-xs text-blue-500 underline">
                  Haritada Göster
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-0">
          <WhenItIsConvenient 
            whenItIsConvenient={whenItIsConvenient}
            whenItIsConvenientDate={whenItIsConvenientDate}
          />
      </CardFooter>
    </Card>
  );
}
