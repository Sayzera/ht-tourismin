import React from "react";
import logo from "@/public/assets/image/logo/logo.svg";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TbBrandYoutube } from "react-icons/tb";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="px-[2rem] md:w-[1020px] md:mx-auto md:px-0 py-4 md:py-[1.8rem]">
        <div className="flex  justify-between">
          <Image src={logo} alt="logo" />
          <div className="flex items-center space-x-2">
            <CiFacebook className="text-2xl text-gray-500 mr-2 cursor-pointer" />
            <RiTwitterXFill className="text-2xl text-gray-500 mr-2 cursor-pointer" />
            <CiLinkedin className="text-2xl text-gray-500 mr-2 cursor-pointer" />
            <CiInstagram className="text-2xl text-gray-500 mr-2 cursor-pointer" />
            <TbBrandYoutube className="text-2xl text-gray-500 mr-2 cursor-pointer" />

            {/* <p className="text-sm text-gray-500">
              © 2021 All rights reserved
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  mt-10">
          <div className="flex flex-col space-y-2 ">
            <div>
              <h2 className="text-base  text-gray-700 hover:underline cursor-pointer">
                Yardım
              </h2>
            </div>
            <div>
              <h2 className="text-base  text-gray-700 hover:underline cursor-pointer">
                Healthtourismin Nasıl Çalıştığını Öğrenin
              </h2>
            </div>
            <div>
              <h2 className="text-base  text-gray-700 hover:underline cursor-pointer">
                Hükümler ve Koşullar
              </h2>
            </div>
            <div>
              <h2 className="text-base  text-gray-700 hover:underline cursor-pointer">
                Çerez Tercihleri
              </h2>
            </div>
            <div>
              <h2 className="text-base  text-gray-700 hover:underline cursor-pointer">
                Gizlilik Bildirimi
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-700">
            Teknopark Ankara İvedik OSB Mh. 2224 Cad. No:1/203 C Bl. K:8
            D:814-815-816 Yenimahalle / ANKARA | Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </div>
  );
}
