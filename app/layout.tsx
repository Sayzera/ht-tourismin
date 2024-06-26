import { Roboto } from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils";

const fontSans = Roboto({
  weight: '400',
  subsets: ['latin'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >  
        {children}
      </body>
    </html>
  );
}
