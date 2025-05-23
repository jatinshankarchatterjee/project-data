"use client";
import HeaderDash from "../Components/HeaderDash";
import "../globals.css";
import { ThemeProvider } from "@/app/Components/Theme-Provider";
import FooterLinks from "@/app/Components/Footer-Links";

export default function FootLinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
         <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
         >
           <div className="flex flex-col min-h-screen">
             <div className="flex-row min-h-[15vh]">
               <HeaderDash />
             </div>
             <div className="flex flex-col min-h-[70vh]">{children}</div>
             <div className="flex-col h-[10vh]">
               <FooterLinks />
             </div>
           </div>
         </ThemeProvider>
       </>
  );
}
