"use client"
import { Sparkle, SparklesIcon } from "lucide-react";
import { Button } from "./ui/button";
import  Link from "next/link";


function DasboarBtn() {
  const isCandidate=false;
  const isInterviewer=true;
  if (isCandidate) return null;

  return (<Link href={"/dashboard"}>
    <Button className="gap-2 font-medium" size={"sm"}>
       <SparklesIcon className= "size-4"/>
       DashBoard
    </Button>
  </Link>);
}

export default DasboarBtn
