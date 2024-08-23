'use client'

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 p-5">
      <div className="flex justify-between items-center">
        <Link href={'/'} className="text-white text-2xl pr-5">My Portfolio</Link>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex space-x-10">
          {[
            ["Home", "/"],
            ["About Me", "/about"],
            ["Works", "/works"],
            ["Resume", "/resume"],
          ].map(([title, url]) => (
            <Link key={title} href={url}>
              <button className="block w-full text-left border-solid border-2 text-black border-blue-800 rounded-md p-2 hover:text-white hover:bg-blue-950">
                {title}
              </button>
            </Link>
          ))}
        </nav>
      </div>
      <Transition
        show={isOpen}
        enter="transition transform duration-500"
        enterFrom="opacity-0 scale-95 -translate-y-4"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition transform duration-400"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-4"
      >
        <nav className="md:hidden mt-4 space-y-2">
          {[
            ["Home", "/"],
            ["About Me", "/about"],
            ["Works", "/works"],
            ["Resume", "/resume"],
          ].map(([title, url]) => (
            <Link key={title} href={url}>
              <button className="block w-full text-center border-solid border-2 m-2 text-black border-blue-800 rounded-md p-2 hover:text-white hover:bg-blue-950">
                {title}
              </button>
            </Link>
          ))}
        </nav>
      </Transition>
    </header>
  );
}
