"use client";
import React from "react";

import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

export default function CalendarSwiper() {
  const startDate = new Date(); // Bugünün tarihi
  const days = Array.from({ length: 7 }).map((_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index); // Her gün için tarih hesaplama
    return currentDate;
  });

  const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  const workinHours = ["12:00", "12:30", "13:00", "13:30", "14:00"];

  return (
    <Card className="p-3 select-none">
      <div className="flex items-center justify-between">
        <div className="text-zinc-700 hover:underline cursor-pointer pl-2">
          Önceki Hafta
        </div>
        <div className="text-zinc-700 hover:underline cursor-pointer pr-2">
          Sonraki Hafta
        </div>
      </div>
      <Separator className="mt-2" />

      <div className="grid grid-cols-7 gap-2 items-center mt-2">
        {days.map((day, index) => (
          <div key={index} className="text-center text-zinc-700">
            <div className="text-sm md:text-normal">{dayNames[day.getDay()]}</div>
            <div className="whitespace-nowrap text-sm md:font-semibold text-center">
              {day.toLocaleDateString("tr-TR", {
                day: "2-digit",
                month: "short",
              })}
            </div>{" "}
            <div className="space-y-2 mt-3">
              {workinHours.map((hour, index) => (
                <div
                  key={index}
                  className="text-sm md:text-sm w-full bg-[#007dfb] text-white p-2  rounded-md
                hover:bg-[#005fa3] cursor-pointer text-center
                "
                >
                 <span> {hour}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
