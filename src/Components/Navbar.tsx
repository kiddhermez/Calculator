"use client";

import MenuIcon from "@/Components/Icons/MenuIcon";
import LightIcon from "@/Components/Icons/LightIcon";
import MoonIcon from "@/Components/Icons/MoonIcon";
import PanelInfo from "./PanelInfo";
import { useState } from "react";
import { Cookie } from "next/font/google";

const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [hidden, setHiden] = useState(true);
  const [dark, setDark] = useState(true);

  return (
    <>
      <div className={cookie.className}>
        <header className="z-50 flex w-screen items-center bg-transparent p-5">
          <button
            onClick={() => {
              setHiden(!hidden);
            }}
          >
            <MenuIcon
              width={"2rem"}
              className="fill-[#474747] dark:fill-white"
            />
          </button>
          <div className="flex-grow text-center text-4xl font-bold text-[#474747] dark:text-gray-300">
            Campo Electrico
          </div>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setDark(!dark);
            }}
          >
            {!dark ? (
              <LightIcon
                width={"2rem"}
                className="fill-[#474747] dark:fill-white"
              />
            ) : (
              <MoonIcon
                width={"2rem"}
                className="fill-[#474747] dark:fill-white"
              />
            )}
          </button>
        </header>
        {!hidden ? <PanelInfo /> : ""}
      </div>
    </>
  );
};

export default Navbar;
