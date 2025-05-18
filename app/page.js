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

        <div className="mx-20 grid lg:grid-cols-4 gap-[10px] items-start sm:gap-y-[10px] grid-cols-1">
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

          <div className="bg-gray-100 rounded-xl max-w-full h-full p-5 lg:p-13 col-span-3 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectslist.map((project, idx) => (
              <Project key={idx} {...project} />
            ))}
          </div>
        </div>
      </main>
  );
}
