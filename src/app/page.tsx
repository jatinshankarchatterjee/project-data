"use client";
import { BarChartMixed } from "@/app/Components/BarChart-Mixed";
import { PieStacked } from "@/app/Components/Pie-Stacked";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import HeaderHome from "@/app/Components/HeaderHome";
import FooterHome from "./Components/FooterHome";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex flex-col max-h-screen max-w-screen-2xl">
        <div className="flex-col min-h-[15vh]">
          <HeaderHome />
        </div>
        <div className="flex-col min-h-[70vh]">
          <section className="mt-6">
            <p className="mx-5 my-2">
              All the little details for your small,mid or large
              business/company, that are overlooked due to various difficulties
              pertaining to budget limitations, skill level or manpower,fixed in
              a easy manageable tool.
            </p>
          </section>
          <div className="flex h-auto justify-center align-top gap-4">
            <Calendar mode="single" selected={date} onSelect={setDate} />
            <PieStacked />
            <BarChartMixed />
          </div>
        </div>
        <div className="flex-col min-h-[10vh]">
          <FooterHome />
        </div>
      </div>
    </>
  );
}
