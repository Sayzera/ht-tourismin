import React from "react";
import SearchFilter from "./search-filter";
import PopularSpecialties from "./popular-specialties";

type Props = {};

function MainSearch({}: Props) {
  return (
    <div className="px-[2rem] md:w-[1020px] md:mx-auto md:px-0 py-4 md:py-[4.8rem]">
      <div>
        <p className="title">
          Sağlık sorunlarınızı ertelemeyin! Doktor veya uzmanla anında randevu
          alın. Hızlıca sağlık hizmetine ulaşın. Sağlıklı günler dileriz!{" "}
        </p>
        <p className="text-base text-gray-800 mt-2">
          Sağlığınız için hemen harekete geçin, uzmanlarımızla hızlıca buluşun!
        </p>
      </div>

      <div className="mt-10">
        <SearchFilter />
      </div>

      <div className="mt-10">
        <PopularSpecialties />
      </div>
    </div>
  );
}

export default MainSearch;
