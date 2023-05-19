import React from "react";

interface Props {
  value: number;
}

const Buttons = ({ value }: Props) => {
  return <button className="text-3xl bg-slate-900 rounded-md p-3">{value}</button>;
};

export default Buttons;
