"use client";

import React from "react";
import logo from "@/public/assets/image/logo/logo.svg";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import NavigationItem from "./navigation-item";
import Link from "next/link";

type Props = {};

function NavigationHorizontalBar({}: Props) {
  return (
    <div className="w-full border-b h-[56px] shadow-sm">
      <div className="px-[2rem] h-full md:w-[1020px] md:mx-auto md:px-0">
        <div className="flex justify-between w-full h-full">
          <div className="flex  items-center ">
            <Link href="/">
            <Image src={logo} alt="Logo" width={0} height={0} />
            </Link>
          </div>
          <div className="flex h-full">
            <NavigationItem
              Icon={FaRegHeart}
              text="Favorilerim"
              onClick={() => {}}
            />
            <NavigationItem Icon={TfiWorld} text="TR" onClick={() => {}} />
            <NavigationItem
              Icon={FaRegUserCircle}
              text="Giriş Yap"
              onClick={() => {}}
            />
            <NavigationItem
              Icon={CiMenuBurger}
              text="Menü"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHorizontalBar;
