import React from "react";

export default function Present() {
  return (
          <div className="flex flex-col items-start space-y-1">
            <span className="flex items-center gap-2 px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Present
            </span>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-start gap-1">
                <div>
                  <p className="font-medium text-[14px] leading-snug mb-2">
                    Software Quality Assurance Intern
                  </p>
                  <div className="flex items-center">
                    <i className="ri-map-pin-3-fill text-xs text-gray-500 mt-0.5"></i>
                    <a
                      href="https://maps.app.goo.gl/eS2UnwavcGapiHAM7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal underline text-xs text-gray-500 hover:text-gray-700 ml-[5px]"
                    >
                      PT Bio Farma (Persero)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
