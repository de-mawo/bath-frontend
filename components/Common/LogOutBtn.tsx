"use client";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

const LogOutBtn = () => {
  return (
    <div className="w-12 h-12">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`}>
              <button className=" bg-slate-50 p-2  rounded-full dark:bg-black">
                <CiLogout size={24} />
              </button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>LogOut </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default LogOutBtn;
