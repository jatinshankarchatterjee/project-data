import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navlinks() {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-1/5 place-content-center outline-none opacity-40 hover:opacity-100 text-lg">
            Manage Inventory
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <Link href="/addProducts">
              <DropdownMenuItem className="dark:hover:text-black ">
                Add Products
              </DropdownMenuItem>
            </Link>
            <Link href="/addServices">
              <DropdownMenuItem className="dark:hover:text-black ">
                Add Services
              </DropdownMenuItem>
            </Link>
            <Link href="/addPackages">
              <DropdownMenuItem className="dark:hover:text-black ">
                Add Packages
              </DropdownMenuItem>
            </Link>
            <Link href="/createDeals">
              <DropdownMenuItem className="dark:hover:text-black ">
                Create Deals
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-1/5 place-content-center outline-none opacity-40 hover:opacity-100 text-lg">
            Manage Invoices
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <Link href="/createInvoice">
              <DropdownMenuItem className="dark:hover:text-black ">
                Create Invoice
              </DropdownMenuItem>
            </Link>
            <Link href="/editInvoice">
              <DropdownMenuItem className="dark:hover:text-black ">
                Edit Invoice
              </DropdownMenuItem>
            </Link>
            <Link href="/addInvoice">
              <DropdownMenuItem className="dark:hover:text-black ">
                Add Invoice
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-1/5 place-content-center outline-none opacity-40 hover:opacity-100 text-lg">
            Sales-Expenses
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <Link href="/salesAnalysis">
              <DropdownMenuItem className="dark:hover:text-black ">
                Sales Analysis
              </DropdownMenuItem>
            </Link>
            <Link href="/billing">
              <DropdownMenuItem className="dark:hover:text-black ">
                Billing
              </DropdownMenuItem>
            </Link>
            <Link href="/addExpenses">
              <DropdownMenuItem className="dark:hover:text-black ">
                Add Expenses
              </DropdownMenuItem>
            </Link>
            <Link href="/editExpenses">
              <DropdownMenuItem className="dark:hover:text-black ">
                Edit Expenses
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-1/5 place-content-center outline-none opacity-40 hover:opacity-100 text-lg">
            Taxation
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <Link href="/taxAnalysis">
              <DropdownMenuItem className="dark:hover:text-black ">
                Tax Analysis
              </DropdownMenuItem>
            </Link>
            <Link href="/serviceTax">
              <DropdownMenuItem className="dark:hover:text-black ">
                Service Tax
              </DropdownMenuItem>
            </Link>
            <Link href="/incomeTax">
              <DropdownMenuItem className="dark:hover:text-black ">
                Income Tax
              </DropdownMenuItem>
            </Link>
            <Link href="/otherTax">
              <DropdownMenuItem className="dark:hover:text-black ">
                Other Tax
              </DropdownMenuItem>
            </Link>
            <Link href="/taxReports">
              <DropdownMenuItem className="dark:hover:text-black ">
                Tax Reports
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-1/5 place-content-center outline-none opacity-40 hover:opacity-100 text-lg">
            Profile
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <Link href="/editProfile">
              <DropdownMenuItem className="dark:hover:text-black ">
                Edit Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/settings">
              <DropdownMenuItem className="dark:hover:text-black ">
                Settings
              </DropdownMenuItem>
            </Link>
            <Link href="/otherDetails">
              <DropdownMenuItem className="dark:hover:text-black ">
                Other details
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
