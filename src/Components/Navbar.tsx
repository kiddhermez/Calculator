"use client";

import MenuIcon from "@/Components/Icons/MenuIcon";
import LightIcon from "@/Components/Icons/LightIcon";
import PanelInfo from "./PanelInfo";
import { useState } from "react";
import { Cookie } from "next/font/google";

const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [hidden, setHiden] = useState(true);
  return (
    <>
      <div className={cookie.className}>
        <header className="z-50 flex w-screen items-center bg-transparent p-5">
          <button
            onClick={() => {
              setHiden(!hidden);
            }}
          >
            <MenuIcon width={"2rem"} className="fill-white" />
          </button>
          <div className="flex-grow text-center text-4xl font-bold text-gray-300">
            Campo Electrico
          </div>
          <button>
            <LightIcon width={"2rem"} className="fill-white" />
          </button>
        </header>
      {!hidden ? <PanelInfo /> : ""}
      </div>
    </>
  );
};

export default Navbar;
