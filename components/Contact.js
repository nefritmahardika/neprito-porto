import React from "react";

export default function Contact() {
  return (
          <div className="bg-gray-100 p-3 rounded-xl space-y-4 h-full grid-cols-3 mb-20 lg:mb-0">
            <p className="text-right text-gray-600 text-sm">
              <a
                href="https://linkedin.com/in/nefritmahardika/"
                target="_blank"
                className="hover:text-gray-400 p-1"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a
                href="https://github.com/nefritmahardika/"
                target="_blank"
                className="hover:text-gray-400 p-1"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://instagram.com/nefritmahardika"
                target="_blank"
                className="hover:text-gray-400 p-1"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="mailto:nefrit1208@gmail.com"
                className="hover:text-gray-400 p-1"
              >
                <i className="ri-mail-fill"></i>
              </a>
            </p>
          </div>
  );
}
