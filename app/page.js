import React from "react";
import Head from "next/head"; // ⬅️ gunakan ini
import Header from "../components/Header";
import About from "../components/About";
import Present from "../components/Present";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Project from "../components/Project";
import projectslist from "../components/ProjectList";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <main className="max-h-screen bg-gray font-sans">
      <Header />

      <div className="mx-10 grid lg:grid-cols-4 gap-[10px] items-start sm:gap-y-[10px] grid-cols-1">
        <div className="bg-gray-100 rounded-xl h-45 max-w-full p-6 col-span-3 lg:col-span-2 flex items-center justify-center">
          <About />
        </div>

        <div className="bg-gray-100 p-6 relative rounded-xl h-40 col-span-3 lg:col-span-1 lg:h-45 md:h-40">
          <Present />
        </div>

        <div className="flex flex-col space-y-3 col-span-3 lg:col-span-1 row-span-2 max-h-[534px] order-last lg:order-none">
          <Experience />
          <Contact />
        </div>
        <div className="h-full max-w-full rounded-xl col-span-3 bg-gray-100 p-6 px-0">
          <span className="ml-6 flex w-25 items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Projects
          </span>
<div className="mx-6 mt-6 grid lg:grid-cols-3 grid-rows-2 gap-4 bg-gray-100 p-1 rounded-lg">
  {projectslist.slice(0, 9).map((project, idx) => (
    <Project key={idx} {...project} />
  ))}
</div>


        </div>
      </div>
    </main>
  );
}
