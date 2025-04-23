"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();


  return (
    <div className="underline decoration-gray-500 underline-offset-7 text-gray-500 flex mt-5">
      <ChevronRight className="w-4" />
      <button onClick={() => router.back()}>_go back ..</button>
    </div>
  );
}
