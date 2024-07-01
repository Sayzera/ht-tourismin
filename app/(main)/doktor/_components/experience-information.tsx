"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoGitNetworkOutline } from "react-icons/io5";

type Props = {};
const experinceInfos = [
  "Sivas Numune Hastanesi",
  "Ankara Numune Hastanesi",
  "Hacettepe Üniversitesi Hastanesi",
  "İstanbul Üniversitesi Hastanesi",
];
export default function ExperinceInformation({}: Props) {
  return (
    <Card className="mt-4 p-4">
      <div>
        <div className="flex items-center space-x-2">
          <div>
            <IoGitNetworkOutline className="text-4xl text-blue-500" />
          </div>
          <span className="text-lg">Deneyim Bilgileri</span>
        </div>

        <div className="mt-2">
          {experinceInfos.map((item, index) => (
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
