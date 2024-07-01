"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import "swiper/css";

import { Button } from "../ui/button";

export default function CalendarSwiper() {
  const swiper = useSwiper();

  const startDate = new Date(); // Bugünün tarihi
  const days = Array.from({ length: 49 }).map((_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index); // Her gün için tarih hesaplama
    return currentDate;
  });

  const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  const workinHours = ["12:00", "12:30", "13:00", "13:30", "14:00"];

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={5}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {days.map((day, index) => (
          <SwiperSlide key={index} className="select-none">
            <div className="mt-0">
              <div className="relative">
                <div className="text-center w-full">
                  {dayNames[day.getDay()]}
                </div>{" "}
                {/* Haftanın günü */}
                <div className="whitespace-nowrap text-sm font-semibold text-center">
                  {day.toLocaleDateString("tr-TR", {
                    day: "2-digit",
                    month: "short",
                  })}
                </div>{" "}
              </div>
              <div className="space-y-2 mt-3">
                {workinHours.map((hour, index) => (
                  <Button
                    variant={"outline"}
                    key={index}
                    className="text-sm w-full bg-[#007dfb] text-white"
                  >
                    {hour}
                  </Button>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          className="w-full  items-center justify-between space-x-2 mt-0 hidden 
absolute top-0 z-[9999] 
"
        >
          <SwiperButtonPrev>
            <MdNavigateBefore />
          </SwiperButtonPrev>
          <SwiperButtonNext>
            <MdNavigateNext />
          </SwiperButtonNext>
        </div>
      </Swiper>
    </div>
  );
}

const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return (
    <Button id='swiper-next-btn' variant={"outline"} size={"sm"} onClick={() => swiper.slideNext()}>
      {children}
    </Button>
  );
};

const SwiperButtonPrev = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return (
    <Button id='swiper-before-btn' variant={"outline"} size={"sm"} onClick={() => swiper.slidePrev()}>
      {children}
    </Button>
  );
};
