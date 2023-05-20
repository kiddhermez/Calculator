"use client";

import "katex/dist/katex.min.css";
import katex from "katex";

interface Props {
  boxedIndex: number;
  Charge: string;
  ExpCharge: string;
  Radius: string;
  ExpRadius: string;
  Result: string;
}

const Formule = ({
  boxedIndex,
  Charge,
  ExpCharge,
  Radius,
  ExpRadius,
  Result,
}: Props) => {
  const getFormules = [
    `{\\orange{${Charge}}
      \\times 10^{${ExpCharge}}C
      \\over 4 \\pi \\epsilon_0 ({${Radius}
      \\times 10^{${ExpRadius}}m})^2} = ${Result}`,

    `{${Charge}
      \\times 10^{\\orange{${ExpCharge}}}C
      \\over 4 \\pi \\epsilon_0 ({${Radius}
      \\times 10^{${ExpRadius}}m})^2} = ${Result}`,

    `{${Charge}
      \\times 10^{${ExpCharge}}C
      \\over 4 \\pi \\epsilon_0 ({\\orange{${Radius}}
      \\times 10^{${ExpRadius}}m})^2} = ${Result}`,

    `{${Charge}
      \\times 10^{${ExpCharge}}C
      \\over 4 \\pi \\epsilon_0 ({${Radius}
      \\times 10^{\\orange{${ExpRadius}}}m})^2} = ${Result}`,
  ];

  const html = katex.renderToString(getFormules[boxedIndex]);
  return (
    <span className="text-5xl" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Formule;
