import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
};

export default function OverviewItem({ image, title, description }: Props) {
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <Image src={image} alt={title} className="w-28 h-28 object-contain" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}
