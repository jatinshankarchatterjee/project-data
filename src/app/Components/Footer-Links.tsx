"use client";
import React from "react";
import Link from "next/link";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import GroupIcon from "@mui/icons-material/Group";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
export default function FooterLinks() {
  return (
    <>
      <div id="hr" className="h-1"></div>
      <div className="flex mt-2 justify-evenly align-middle">
        <Link
          href="/"
          className="no-underline opacity-40 hover:opacity-100"
          title="Home"
          aria-label="Home"
        >
          <HomeOutlinedIcon fontSize="large" />
        </Link>
        <Link
          href="/references"
          className="no-underline opacity-40 hover:opacity-100"
          title="References"
          aria-label="References"
        >
          <LinkOutlinedIcon fontSize="large" />
        </Link>
        <Link
          href="/news"
          className="no-underline opacity-40 hover:opacity-100"
          title="News"
          aria-label="News"
        >
          <NewspaperOutlinedIcon fontSize="large" />
        </Link>
        <Link
          href="/tools"
          className="no-underline opacity-40 hover:opacity-100"
          title="Tools"
          aria-label="Tools"
        >
          <ConstructionOutlinedIcon fontSize="large" />
        </Link>
        <Link
          href="/websites"
          className="no-underline opacity-40 hover:opacity-100"
          title="Websites"
          aria-label="Websites"
        >
          <AddLinkOutlinedIcon fontSize="large" />
        </Link>
        <Link
          href="/reportIssues"
          className="no-underline opacity-40 hover:opacity-100"
          title="Report issue"
          aria-label="Report issue"
        >
          <ReportProblemIcon fontSize="large" />
        </Link>
        <Link
          href="/comments"
          className="no-underline opacity-40 hover:opacity-100"
          title="Comments"
          aria-label="Comments"
        >
          <CommentOutlinedIcon fontSize="large" />
        </Link>
        <Link
          href="/aboutCreators"
          className="no-underline opacity-40 hover:opacity-100"
          title="About creators"
          aria-label="About creators"
        >
          <GroupIcon fontSize="large" />
        </Link>
        <Link
          href="/contactUs"
          className="no-underline opacity-40 hover:opacity-100"
          title="Contact Us"
          aria-label="Contact Us"
        >
          <ContactPageOutlinedIcon fontSize="large" />
        </Link>

        <Link
          href="https://twitter.com"
          className="no-underline opacity-40 hover:opacity-100"
          title="share to X"
          aria-label="share to X"
        >
          <XIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.facebook.com"
          className="no-underline opacity-40 hover:opacity-100"
          title="share to facebook"
          aria-label="share to facebook"
        >
          <FacebookOutlinedIcon fontSize="large" />
        </Link>
        <Link
          className="no-underline opacity-40 hover:opacity-100"
          href="https://web.whatsapp.com/"
          title="share to whatsapp"
          aria-label="share to whatsapp"
        >
          <WhatsAppIcon fontSize="large" />
        </Link>
      </div>
    </>
  );
}
