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
    <div className="mt-12 h-max w-max rounded-2xl bg-gray-600 p-8 text-center">
      <section className="grid h-28 place-content-center rounded-lg bg-white ">
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
            className="rounded-md bg-slate-900 p-3 text-3xl"
            value={`${i + 1}`}
            onClick={() => {
              Change(`${i + 1}`);
            }}
          />
        ))}

        <Buttons
          className="p-3 text-xl"
          value={"C"}
          onClick={() => {
            setChargeValue("");
            setExpChargeValue("");
            setRadiusValue("");
            setExpRadiusValue("");
          }}
        />
        <Buttons
          className="rounded-md bg-slate-900 p-3 text-3xl"
          value={"0"}
          onClick={() => {
            Change("0");
          }}
        />
        <Buttons
          className="p-3 text-xl"
          value="Del"
          onClick={() => {
            Change("\\boxed{}");
          }}
        />
        <Buttons
          value={<ArrowLeftIcon width={20} className="mx-auto" />}
          onClick={() =>
            setSelectedIndex(selectedIndex == 0 ? 3 : selectedIndex - 1)
          }
        />
        <Buttons
          value={<PlusMinusIcon width={10} className="mx-auto" />}
          onClick={() => {
            ChangeSign();
          }}
        />
        <Buttons
          value={<ArrowRightIcon width={20} className="mx-auto" />}
          onClick={() =>
            setSelectedIndex(selectedIndex == 3 ? 0 : selectedIndex + 1)
          }
        />
        <Buttons
          className="col-span-3 rounded-md bg-white p-3 text-2xl"
          value={<EqualsIcon width={20} className="mx-auto" />}
          onClick={()=>{
            if(Charge.length<=2&&ExpCharge.length<=2&&Radius.length<=2&&ExpRadius.length<=2){
              setResult(CalcResult(Charge,ExpCharge,Radius,ExpRadius));
            }
          }}
        />
      </section>
    </div>
  );
};

export default Calculator;
