import React from "react";
import MainSearch from "./_components/search";
import LastViewed from "./_components/last-viewed";
import Overview from "./_components/overview";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      {/* background: linear-gradient(to right bottom, var(--white), var(--grey-200)); */}
      <div className="bg-gradient-to-br from-white to-gray-200 font-sans antialiased">
        <MainSearch />

     
      </div>

      <div className="px-[2rem] md:w-[1020px] md:mx-auto md:px-0 py-4 md:py-[1.8rem]">
        <LastViewed />
      </div>

      <div className="px-[2rem] md:w-[1020px] md:mx-auto md:px-0 py-4 md:py-[1.8rem]">
        <Overview />
      </div>

   

  
    </>
  );
}
