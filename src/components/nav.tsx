"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState(0);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  const navItems = [
    {
      title: "home",
      href: "/",
      //   options: [
      //     {
      //       name: "Slam Dunk",
      //       href: '/experience#dunk'
      //     },
      //     {
      //       name: "Meta Labs Experience (Hot + Cold)",
      //       href: '/experience#hotcold'
      //     },
      //   ],
    },
    {
      title: "members",
      href: "/members",
      //   options: [
      //     {
      //       name: "Contrast Therapy",
      //       href: '/resources#contrast'
      //     },
      // {
      //   name: "Wim Hof Method",
      //   href: '/resources#wim-hof'
      // },
      //   ],
    },
    {
      title: "gallery",
      href: "/gallery",
    },
    {
      title: "location",
      href: "/location",
    },
    // {
    //   title: "Book Now",
    //   href: "/book",
    // },
  ];

  return (
    <div
      id="nav-container"
      className=" mt-4 w-screen absolute z-40 flex flex-col items-center"
    >
      <nav
        className={`bg-gray-300 bg-opacity-30 flex justify-center items-center w-screen border-b-1 border-white mb-3 pl-8 shadow-sm shadow-gray-500`}
      >
        {/* Hamburger menu */}
        <div className="w-full z-40 flex justify-center gap-8 py-2 items-center lg:hidden">
          <Link href="/" onClick={() => setItem(0)}>
            <Image
              src="/metalabs-logo.svg"
              width="100"
              height="100"
              alt="Meta Labs Logo"
            />
          </Link>

          <div className="flex flex-wrap w-full">
            {navItems.map((e, i) => {
              return (
                <div key={i} className="w-1/2 text-center">
                  <Link
                    key={i}
                    id={e.title}
                    href={e.href}
                    onMouseDown={() => setItem(i)}
                    className={`py-1 text-xl ${
                      i == item ? `text-blue-600` : `text-white`
                    } font-extrabold transition duration-500 hover:shadow-md`}
                  >
                    {e.title}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button> */}
        </div>

        {/* Menu Items */}
        <div className="hidden lg:flex items-center transition duration-400 z-40 w-[90%] justify-center">
          <Link href="/" onClick={() => setItem(0)}>
            <Image
              src="/metalabs-logo.svg"
              height="108"
              width="108"
              alt="banner"
              className="p-3 rounded-lg"
            />
          </Link>

          <div className="flex-grow"></div>

          <div className="flex flex-wrap gap-16">
            {navItems.map((e, i) => {
              return (
                <div key={i} className="flex-1 text-center">
                  <Link
                    key={i}
                    id={e.title}
                    href={e.href}
                    onMouseDown={() => setItem(i)}
                    className={`py-1 text-xl ${
                      i == item ? `text-blue-600` : `text-white`
                    } font-extrabold transition duration-500 hover:shadow-md`}
                  >
                    {e.title}
                  </Link>
                </div>
              );
            })}

            <div className="text-center">
              <Link
                href="/book"
                onMouseDown={() => setItem(5)}
                className={`py-1 text-xl ${
                  5 == item ? `text-blue-600` : `text-red-500`
                } font-extrabold transition duration-500 hover:shadow-md`}
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* <div
            id="nav"
            className="flex flex-col md:flex-row items-center sticky justify-center"
          >
            {navItems.map((e, i) => {
              return (
                <div key={i}> */}
          {/* {e.options ? (
                    <div className="dropdown">
                      <Link
                        key={i}
                        id={e.title}
                        href={e.href}
                        onMouseDown={() => setItem(i)}
                        className={`px-10 py-1 text-white font-extrabold hover:cursor-pointer text-border dropdown-btn transition duration-500 hover:shadow-md`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 15 15"
                          className="inline fill-white"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            fill="#000000"
                          />
                        </svg>
                        {e.title}
                      </Link>
                      <div className="dropdown-content text-white rounded-md">
                        {e.options.map((e, i) => {
                          return (
                            <a href={e.href} key={i} className="hover:cursor-pointer">
                              {e.name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ) : ( */}
          {/* <Link
                      key={i}
                      id={e.title}
                      href={e.href}
                      onMouseDown={() => setItem(i)}
                      className={`px-10 py-1 text-white font-extrabold text-border transition duration-500 hover:shadow-md`}
                    >
                      {e.title}
                    </Link> */}
          {/* )} */}
          {/* </div>
              );
            })}
          </div> */}
        </div>

        {/* When menu toggled open */}
        {/* {isOpen && (
          <div className="opacity-90 fixed w-screen h-screen text-3xl top-0 pt-24 z-10 left-1/2 transform -translate-x-1/2 bg-blue-100 md:hidden">
            <div className="flex flex-col h-1/2 justify-around items-center">
              {navItems.map((e, i) => {
                return (
                  <Link
                    key={i}
                    id={e.title}
                    href={e.href}
                    onClick={toggleMobileMenu}
                    onMouseUp={() => setItem(i)}
                    className={`w-full h-full flex justify-center items-center px-10 py-1 text-gray-700 font-extrabold ${
                      item == i ? "underline" : "opacity-80"
                    }`}
                  >
                    {e.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )} */}
      </nav>
    </div>
  );
}
