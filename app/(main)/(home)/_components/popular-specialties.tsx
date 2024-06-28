import React from "react";
import { categories } from "@/data/categories-name";
type Props = {};

export default function PopularSpecialties({}: Props) {
  return (
    <div className="hidden md:flex items-center space-x-4 ">
      <div>
        <span className="text-lg font-semibold text-gray-800 whitespace-nowrap">
          Popüler Branşlar
        </span>
      </div>

      <div className="flex items-center  gap-2 flex-wrap">
        {categories.map((category, index) => (
          <>
            <div key={index}>
              <span className="text-sm whitespace-nowrap hover:underline cursor-pointer">
                {category.name}
              </span>
            </div>
          </>
        ))}
        <div >
              <span className="text-sm whitespace-nowrap hover:underline cursor-pointer font-semibold">
             Tümü
              </span>
            </div>
      </div>
    </div>
  );
}
