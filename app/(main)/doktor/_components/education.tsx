"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";


type Props = {};
const educations = [
  'Hacettepe Üniversitesi Tıp Fakültesi',
  'İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi',
  'Hacettepe Üniversitesi Beyin ve Sinir Cerrahisi Anabilim Dalı',
];
export default function Education({}: Props) {
  return (
    <Card className="mt-4 p-4">
      <div>
        <div className="flex items-center space-x-2">
          <div>
            <HiOutlineAcademicCap className="text-4xl text-blue-500" />
          </div>
          <span className="text-lg">
           Eğitim Bilgileri
          </span>
        </div>

        <div className="mt-2">
          {educations.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-zinc-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-2 inline-block"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
