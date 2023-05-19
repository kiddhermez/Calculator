"use client";

import Buttons from "@/Components/Buttons";
import Formule from "@/Components/Formule";
import ArrowLeftIcon from "@/Components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "@/Components/Icons/ArrowRightIcon";
import PlusMinusIcon from "@/Components/Icons/PlusMinusIcon";
import EqualsIcon from "@/Components/Icons/EqualsIcon";
import React, { useState } from "react";

const Calculator = () => {
  const [boxedIndex, setBoxedIndex] = useState(0);

  return (
    <div className="mt-12 h-max w-max rounded-2xl bg-gray-600 p-8 text-center">
      <section className="grid h-28 place-content-center rounded-lg bg-white ">
        <Formule boxedIndex={boxedIndex} />
      </section>
      <section className="mt-5 grid grid-cols-3 gap-8">
        {[...Array(9)].map((x, i) => (
          <Buttons value={i + 1} />
        ))}
        <button className="text-2xl">C</button>
        <Buttons value={0} />
        <button className="text-2xl">Del</button>
        <button
          onClick={() => setBoxedIndex(boxedIndex == 0 ? 3 : boxedIndex - 1)}
        >
          <ArrowLeftIcon width={20} className="mx-auto" />
        </button>
        <button>
          <PlusMinusIcon width={10} className="mx-auto" />
        </button>
        <button onClick={() => setBoxedIndex(boxedIndex == 3 ? 0 : boxedIndex + 1)}>
          <ArrowRightIcon width={20} className="mx-auto" />
        </button>
        <button className="col-span-3 rounded-md bg-white p-3 text-2xl">
          <EqualsIcon width={20} className="mx-auto" />
        </button>
      </section>
    </div>
  );
};

export default Calculator;
