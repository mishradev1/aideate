import TypewritterTitle from "@/components/TypewritterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 min-h-screen grainy">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-semibold text-center">
          AI <span className="text-green-600 font-bold">notes taking </span> assistant
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <TypewritterTitle/>
        </h2>
        <div className="mt-8"></div>

        <div className="flex justify-center">
        <Link href="/dashboard">
        <Button className = "bg-green-600">
          Get Started
          <ArrowRightIcon className="w-6 h-6 ml-2" strokeWidth={3} />
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
