import React from "react";
import { Card, CardContent } from "@/components/ui/card";
type Props = {};

export default function LastViewItem({}: Props) {
  return <div>
    <Card>
      <CardContent>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="ml-2">
              <div className="w-20 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-3 bg-gray-200 rounded mt-1"></div>
            </div>
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </CardContent>
    </Card>
  </div>;
}
