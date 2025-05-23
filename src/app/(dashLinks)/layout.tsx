"use client";
import "../globals.css";
import HeaderDash from "@/app/Components/HeaderDash";
import FooterLinks from "@/app/Components/Footer-Links";
export default function DashLinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderDash />
      {children}
      <FooterLinks />
    </>
  );
}
