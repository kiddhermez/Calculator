"use client";

import Buttons from "@/Components/Buttons";
import Formule from "@/Components/Formule";
import ArrowLeftIcon from "@/Components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "@/Components/Icons/ArrowRightIcon";
import PlusMinusIcon from "@/Components/Icons/PlusMinusIcon";
import EqualsIcon from "@/Components/Icons/EqualsIcon";

import React, { useState } from "react";

import CalcResult from "@/Scripts/CalcCamp";

const Calculator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [Charge, setChargeValue] = useState("\\boxed{}");
  const [ExpCharge, setExpChargeValue] = useState("\\boxed{}");
  const [Radius, setRadiusValue] = useState("\\boxed{}");
  const [ExpRadius, setExpRadiusValue] = useState("\\boxed{}");
  const [Result, setResult] = useState("\\color{lightgray}{\\boxed{}}");

  const Change = (value: string) => {
    switch (selectedIndex) {
      case 0:
        if (Charge.charAt(0) == "-") {
          setChargeValue("-" + value);
          break;
        }
        setChargeValue(value);
        break;
      case 1:
        if (ExpCharge.charAt(0) == "-") {
          setExpChargeValue("-" + value);
          break;
        }
        setExpChargeValue(value);
        break;
      case 2:
        if (Radius.charAt(0) == "-") {
          setRadiusValue("-" + value);
          break;
        }
        setRadiusValue(value);
        break;
      case 3:
        if (ExpRadius.charAt(0) == "-") {
          setExpRadiusValue("-" + value);
          break;
        }
        setExpRadiusValue(value);
        break;
    }
  };

  const ChangeSign = () => {
    switch (selectedIndex) {
      case 0:
        if (Charge.charAt(0) == "-") {
          setChargeValue(Charge.substring(1));
          break;
        }
        setChargeValue("-" + Charge);
        break;
      case 1:
        if (ExpCharge.charAt(0) == "-") {
          setExpChargeValue(ExpCharge.substring(1));
          break;
        }
        setExpChargeValue("-" + ExpCharge);
        break;
      case 2:
        break;
      case 3:
        if (ExpRadius.charAt(0) == "-") {
          setExpRadiusValue(ExpRadius.substring(1));
          break;
        }
        setExpRadiusValue("-" + ExpRadius);
        break;
    }
  };

  return (
    <div className="my-auto h-max w-[90vw] rounded-2xl bg-[#A2D2FF] p-8 text-center dark:bg-[#282F44] md:w-[85vw]">
      <section className="grid h-28 place-content-center rounded-lg bg-[#8eb5db] dark:bg-[#1d2231] md:p-10">
        <Formule
          boxedIndex={selectedIndex}
          Charge={Charge}
          ExpCharge={ExpCharge}
          Radius={Radius}
          ExpRadius={ExpRadius}
          Result={Result}
        />
      </section>

      <section className="mt-5 grid grid-cols-3 gap-8">
        {[...Array(9)].map((x, i) => (
          <Buttons
            className="rounded-md bg-[#8eb5db] p-3 text-3xl text-[#474747] dark:bg-[#1d2231] dark:text-white"
            value={`${i + 1}`}
            onClick={() => {
              Change(`${i + 1}`);
            }}
          />
        ))}

        <Buttons
          className="p-3 text-xl text-[#474747] dark:text-white"
          value={"C"}
          onClick={() => {
            setChargeValue("\\boxed{}");
            setExpChargeValue("\\boxed{}");
            setRadiusValue("\\boxed{}");
            setExpRadiusValue("\\boxed{}");
            setResult("\\color{lightgray}{\\boxed{}}");
          }}
        />
        <Buttons
          className="rounded-md bg-[#8eb5db] p-3 text-3xl text-[#474747] dark:bg-[#1d2231] dark:text-white"
          value={"0"}
          onClick={() => {
            Change("0");
          }}
        />
        <Buttons
          className="p-3 text-xl text-[#474747] dark:text-white"
          value="Del"
          onClick={() => {
            Change("\\boxed{}");
          }}
        />
        <Buttons
          value={
            <ArrowLeftIcon className="mx-auto w-[20px] fill-[#47474783] dark:fill-[#1d2231] lg:w-[25px]" />
          }
          onClick={() =>
            setSelectedIndex(selectedIndex == 0 ? 3 : selectedIndex - 1)
          }
        />
        <Buttons
          value={
            <PlusMinusIcon className="mx-auto w-[10px] fill-[#47474783] dark:fill-[#1d2231] lg:w-[15px]" />
          }
          onClick={() => {
            ChangeSign();
          }}
        />
        <Buttons
          value={
            <ArrowRightIcon className="mx-auto w-[20px] fill-[#47474783] dark:fill-[#1d2231] lg:w-[25px]" />
          }
          onClick={() =>
            setSelectedIndex(selectedIndex == 3 ? 0 : selectedIndex + 1)
          }
        />
        <Buttons
          className="col-span-3 rounded-md bg-[#47474749] p-3 text-2xl dark:bg-[#453a499f]"
          value={
            <EqualsIcon className="mx-auto w-[20px] fill-[#474747] dark:fill-[#1d2231] lg:w-[25px]" />
          }
          onClick={() => {
            if (
              Charge.length <= 2 &&
              ExpCharge.length <= 2 &&
              Radius.length <= 2 &&
              ExpRadius.length <= 2
            ) {
              setResult(CalcResult(Charge, ExpCharge, Radius, ExpRadius));
            }
          }}
        />
      </section>
    </div>
  );
};

export default Calculator;
