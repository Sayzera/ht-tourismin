'use client'
import React from "react";
import Types from "./types";
import SortBy from "./sort-by";

type Props = {};

export default function DetailFilterCard({}: Props) {
  return (
    <div className="mt-4 w-full md:flex items-center justify-between space-y-3 md:space-y-0">
      <Types />

      <div>
        <SortBy />
      </div>
    </div>
  );
}
