"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { LuFolders } from "react-icons/lu";

type Props = {};
const inetersts = [
  "Beyin Tümörleri",
  "Omurilik Tümörleri",
  "Beyin Kanamaları",
  "Omurilik Yaralanmaları",
  "Sinir Sıkışmaları",
  "Hidrosefali (Beyin Sıvısı Toplanması)",
  "Skolyoz ve Omurga Eğrilikleri",
  "Beyin Anevrizmaları",
  "Spina Bifida (Açık Omurga)",
  "Periferik Sinir Cerrahisi",
];
export default function DoctorInterests({}: Props) {
  return (
    <Card className="mt-4 p-4">
      <div>
        <div className="flex items-center space-x-2">
          <div>
            <LuFolders className="text-4xl text-blue-500" />
          </div>
          <span className="text-lg">İLGİ ALANLARI / TEDAVİLER</span>
        </div>

        <div className="mt-2">
          {inetersts.map((item, index) => (
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
