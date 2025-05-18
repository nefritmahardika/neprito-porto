import React from "react";
import Image from "next/image";

export default function Header() {
  return (
      <header className="flex text-gray-700 gap-x-5 px-20 mt-10 pb-5 items-center">
        <a href="/page" target="_self">
          <Image src="/img/Photo.png" alt="Profile" width={40} height={40} />
        </a>
        <a href="" target="_self" className="font-semibold text-lg underline">
          Nefrit Mahardika
        </a>
      </header>
  );
}