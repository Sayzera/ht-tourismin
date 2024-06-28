import React from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";

type Props = {};

export default function Cities({}: Props) {
  return (
    <div className="w-full h-full md:flex md:justify-center">
      <div className=" flex space-x-2 ml-4 md:ml-2 mb-6 md:mb-0 cursor-pointer items-center">
        <MdAddLocationAlt className="text-[#2e8cca] text-[24px]" />
        <span className="font-semibold">Ankara</span>
        <LiaAngleDownSolid className="text-[#2e8cca] h-4 w-4 text-[24px]" />
      </div>
    </div>
  );
}
