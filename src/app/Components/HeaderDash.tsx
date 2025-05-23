"use client";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { ModeToggle } from "./Mode-Toggle";

export default function HeaderDash() {
  const { signOut } = useClerk();
  const { isLoaded, user, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <div className="flex justify-between align-middle m-2">
        <div className="flex text-4xl font-sans font-extrabold">data</div>
        <div className="flex text-xl animate-in slide-in-from-left-52 animate-duration-1000 mt-2">
          {user.firstName}&apos;s Dashboard
        </div>
        <div className="flex justify-center align-middle gap-10">
          <button
            className="no-underline hover:bg-orange-300 hover:text-black rounded-md"
            onClick={() => signOut({ redirectUrl: "/sign-in" })}
          >
            <LogoutIcon fontSize="large" />
          </button>
          <ModeToggle />
        </div>
      </div>

      <div id="hr" className="h-1 "></div>
    </>
  );
}
