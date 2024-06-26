"use client";

import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  text: string;
  onClick: () => void;
};

export default function NavigationItem({ Icon, text, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex w-full items-center h-full cursor-pointer hover:bg-gray-100 px-1 md:px-[1.6rem] space-x-2"
    >
      <div>
        <Icon className="w-5 h-5  text-gray-800" />
      </div>
      <div>
        <span className="text-sm whitespace-nowrap hidden md:block text-gray-800">
          {text}
        </span>
      </div>
    </div>
  );
}
