import React from "react";
import { ModeToggle } from "@/app/Components/Mode-Toggle";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function HeaderHome() {
  return (
    <>
      <div className="flex align-middle justify-between m-5">
        <div className="text-4xl font-sans font-extrabold">data</div>
        <div className="flex justify-center align-middle gap-10">
          <Link
            className="no-underline hover:bg-orange-300 hover:text-black rounded-md"
            href="/sign-in"
            title="Login"
            aria-label="Login"
          >
            <LoginIcon sx={{ fontSize: 40 }} />
          </Link>
          <Link
            className="no-underline px-2 hover:bg-orange-300 hover:text-black rounded-md"
            href="/sign-up"
            title="Sign Up"
            aria-label="Sign Up"
          >
            New User ?&nbsp;
            <PersonAddIcon sx={{ fontSize: 40 }} />
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div id ="hr" className="h-1"/>
    </>
  );
}
