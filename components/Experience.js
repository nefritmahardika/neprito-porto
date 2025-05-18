import React from "react";
import Timeline from "./Timeline";

export default function Experience() {
  return (

          <div className="bg-gray-100 p-6 rounded-xl max-w-screen space-y-4 h-[534px]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>{" "}
                Experiences
              </span>
            </div>
            <Timeline />
          </div>
  );
}
