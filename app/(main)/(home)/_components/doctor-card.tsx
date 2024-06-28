'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CiCircleCheck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";

import Image, { StaticImageData } from "next/image";
import doctor_1 from "@/public/assets/doctors/doctor-1.png";
import { Button } from "@/components/ui/button";
export type DoctorCardsProps = {
  image: StaticImageData;
  title: string;
  name: string;
  speciality: string;
  rating: number;
  viewCount: number;
  location: string;
  specialities: string[];
  ratingTitle: string;
  onClick: () => void;
};

function DoctorCard({
  image,
  title,
  name,
  rating,
  ratingTitle,
  viewCount,
  location,
  speciality,
  specialities,

  onClick,
}: DoctorCardsProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative">
          <Image
            className="rounded-t-lg object-cover w-full h-60"
            src={image}
            alt={name}
          />
          <CiCircleCheck
            className=" text-lg 
         absolute top-2 right-2 rounded-full p-1 h-8 w-8 bg-blue-500 text-white
        "
          />
        </div>

        <div className="p-4 space-y-1 h-full">
          <div className="text-blue-400 font-semibold  text-sm flex items-center space-x-2">
            <span>{title}</span>
          </div>
          <div className="flex space-x-4">
            <div className="text-zinc-700 font-semibold  text-sm flex  items-center space-x-2">
              <span>
                {speciality} {name}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-zinc-600  text-xs flex  items-center space-x-1">
              <span>
                <span className="font-bold">
                  {rating} - {ratingTitle}{" "}
                </span>{" "}
                ({viewCount})
              </span>
            </div>
            <div className="text-zinc-600  text-xs flex  items-center space-x-1">
              <CiLocationOn className="text-black w-4 h-4" />{" "}
              <span>{location}</span>
            </div>
          </div>

          <div
            className="!mt-4 flex items-center flex-nowrap space-x-3"
            style={{}}
          >
            {specialities.map((speciality) => (
              <div
                key={speciality}
                className="text-xs text-zinc-500 p-1  whitespace-nowrap truncate underline cursor-pointer"
              >
               {speciality}
              </div>
            ))}

          
          </div>

          <div className="mt-4">
            <Button
            onClick={onClick}
              className="bg-blue-500 text-white w-full mt-4
            hover:bg-blue-600
            "
            >
              Randevu Al
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;
