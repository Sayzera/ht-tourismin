"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CiCircleCheck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";

import Image, { StaticImageData } from "next/image";
import doctor_1 from "@/public/assets/image/doctors/doctor-1.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import WhenItIsConvenient from "../../doktorlar/_components/when-it-is-convenient";
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
  lastComment?: string;
};

function DoctorDetailCard({
  image,
  title,
  name,
  rating,
  ratingTitle,
  viewCount,
  location,
  speciality,
  specialities,
  lastComment = "",

  onClick,
}: DoctorCardsProps) {
  const [textSplit, setTextSplit] = useState(false);
  const times = {
    whenItIsConvenient: "3 Temmuz 2024 Cuma 12:30",
    whenItIsConvenientDate: ["14:30", "15:30", "16:30"],
  }
  return (
    <Card>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="relative col-span-12 md:col-span-3">
            <Image
              className="rounded-t-lg object-cover md:object-contain w-full h-60"
              src={image}
              alt={name}
            />
            <CiCircleCheck
              className=" text-lg 
         absolute top-2 right-2 rounded-full p-1 h-8 w-8 bg-blue-500 text-white
        "
            />
          </div>

          <div className="col-span-12 md:col-span-9 p-4 space-y-1 h-full flex flex-col justify-between">
            <div>
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

              {/* <div
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
              </div> */}
            </div>

      
          </div>
        </div>
        <Separator className="mt-2" />

        <div className="py-3 px-2 text-sm text-zinc-600">
          <p>
            {/* Hasta yorumu */}
            {lastComment.length > 100
              ? lastComment.substring(0, 100) + "..."
              : lastComment}{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              {" "}
              Devamı
            </span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="border-t p-0">
          <WhenItIsConvenient 
            whenItIsConvenient={times.whenItIsConvenient}
            whenItIsConvenientDate={times.whenItIsConvenientDate}
          />
      </CardFooter>
    </Card>
  );
}

export default DoctorDetailCard;
