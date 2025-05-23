import React from "react";
import { ModeToggle } from "./Mode-Toggle";
import FooterLinks from "@/app/Components/Footer-Links";
import { PieStacked } from "@/app/Components/Pie-Stacked";
export default function Header() {
  return (
    <>
      <div className="flex-row justify-between align-middle w-1/2">
        <div className="flex align-middle justify-between mt-2">
          <div className="text-4xl font-sans font-extrabold">data</div>
          <ModeToggle />
        </div>
        <div id="hr" className="h-1 mt-2 mb-4"></div>
        <section className="mt-6">
          <p className="mx-5 my-2 text-md font-sans">
            Join in and discover the benefits of all data management tools. A
            package that is easy to use and has a wide range of features.
          </p>
        </section>
        <div>
          <PieStacked />
        </div>

        <FooterLinks />
      </div>
    </>
  );
}
