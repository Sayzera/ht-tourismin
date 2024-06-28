import { Button } from "@/components/ui/button";

import React from "react";
import { GrSearchAdvanced } from "react-icons/gr";

type Props = {};

function SearchBtn({}: Props) {
  return (
    <div className="ml-4 md:ml-2 mb-6 md:mb-0 flex items-center space-x-2 cursor-pointer">
      <GrSearchAdvanced className="text-[#2e8cca] text-[24px]" />
      <span className="font-semibold">ARA </span>
    </div>
  );
}

export default SearchBtn;
