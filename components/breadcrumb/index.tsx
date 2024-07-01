"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

type Props = {
  breadcrumbs: {
    name: string;
    url: string;
  }[];
};

export default function BreadCrumb({ breadcrumbs }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }
  , []);

  if (!mounted) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs?.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href="/"
             className={cn(index === breadcrumbs.length - 1 && "text-blue-500")}
            >{item.name}</BreadcrumbLink>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
