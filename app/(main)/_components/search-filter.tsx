"use client";
import React from "react";

import { Separator } from "@/components/ui/separator";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Cities from "./cities";
import SearchBtn from "./search-btn";
type Props = {};

function SearchFilter({}: Props) {
  return (
    <Card>
      <CardContent className="w-full h-full grid grid-cols-1 md:grid-cols-12 items-center p-0 ">
        <div className="h-full w-full flex md:col-span-6 ">
          <Input
            className="w-full h-full p-6 bg-transparent
          outline-none border-none placeholder:text-muted-foreground text-[18px] font-semibold
          focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
         "
            placeholder="Doktor, uzmanlık alanı, hastane arayın"
          />
          <Separator orientation="vertical" className="hidden md:block" />
        </div>
        <div className="w-full h-full flex md:col-span-3 cursor-pointer hover:bg-gray-50">
          <Cities />
          <Separator orientation="vertical" className="hidden md:block" />
        </div>
        <div className="w-full h-full md:flex md:justify-center md:col-span-3 cursor-pointer hover:bg-gray-50">
          <SearchBtn />
        </div>
      </CardContent>
    </Card>
  );
}

export default SearchFilter;
