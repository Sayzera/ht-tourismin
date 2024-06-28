import React from "react";
import SearchFilter from "@/app/(main)/(home)/_components/search-filter";
import DoctorResultCount from "@/app/(main)/doktorlar/_components/doctor-result-count";
import DetailFilterCard from "@/app/(main)/doktorlar/_components/detail-filter-card";
import DoctorList from "../_components/doctor-list";
import SearchedKeywords from "../_components/searched-keywords";
type Props = {};

export default function Doctors({}: Props) {
  return (
    <>
      <div className="px-[2rem] md:w-[1020px] md:mx-auto md:px-0 py-4 md:py-[1.8rem]">
        {/* <DoctorResultCount
       title="Kadın Hastalıkları ve Doğum"
       count={1234}
      /> */}
        <SearchFilter />

        <DetailFilterCard />
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-4 md:py-0 ">
        <div className="px-[2rem] md:w-[1020px] md:mx-auto md:px-0 py-4 md:py-[1.8rem]">
          <SearchedKeywords />
          <DoctorList />
        </div>
      </div>
    </>
  );
}
