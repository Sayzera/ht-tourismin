import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  whenItIsConvenient: string;
  whenItIsConvenientDate:string[]
};

export default function WhenItIsConvenient({
  whenItIsConvenient,
  whenItIsConvenientDate,
}: Props) {
  return (
    <div className="w-full h-full p-3">
      <div className="text-xs text-zinc-700 mb-3">
        Randevu için en uygun{" "}

        <span className="underline">{whenItIsConvenient}</span>
      </div>
      <div className="md:flex md:items-center w-full h-full justify-between">
        <div className="flex items-center space-x-1">
          {
            whenItIsConvenientDate?.map((item,index) => (
              <div 
              key={'date'+index}
              className="w-[60px] h-[30px] text-sm bg-blue-500 flex items-center text-white justify-center hover:bg-white hover:text-blue-500 hover:underline hover:border hover:border-gray-300 cursor-pointer">
              <span> {item}</span>
            </div>
          ))
          }

          <div className="w-[60px] h-[30px] text-sm  flex items-center justify-center text-blue-500  border border-gray-300 cursor-pointer">
            <span>Tümü</span>
          </div>
        </div>

        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 md:mt-0 w-full md:w-auto">
          Randevu Oluştur
        </Button>
      </div>
    </div>
  );
}
