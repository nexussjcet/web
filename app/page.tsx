"use client";
import { useEffect, useState } from "react";
import GridPattern from "@/components/magicui/grid-pattern";
import Hero from "@/components/Hero";
import History from "@/components/History";
import EventsPage from "@/components/EventsPage";
import TeamsPage from "@/components/TeamsPage";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center relative">
        <div className="w-96">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <img src="./logo.svg" className="repeat-infinite animate-pulse transition-all ease-out" />
        </div>
      </main>
    );
  }

  return (
    <div className="relative w-screen h-auto">
      <GridPattern
        width={50}
        height={50}
        strokeDasharray="5,5"
        className="absolute inset-0"
      />
        <Hero />
      <div className="h-auto">

        <div className="h-auto flex items-center flex-col gap-10">
          <History />
          <EventsPage />
          {/* <TeamsPage /> */}
          {/* <div className="h-screen sticky top-0 z-20">
          </div>
          <div className="h-screen sticky top-0 z-20">
          </div>
          <div className="h-screen sticky top-0 z-20">
          </div> */}
        </div>
      </div>
    </div>
  );
}
