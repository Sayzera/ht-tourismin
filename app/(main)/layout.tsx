import Footer from "@/components/navigation/footer";
import NavigationHorizontalBar from "@/components/navigation/navigation-horizantal-bar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full h-full">
      <NavigationHorizontalBar />
      
        {children}

        
     <Footer />
    </div>
  );
}
