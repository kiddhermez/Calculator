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
  const Data = {
    charge: boxedIndex == 0 ? `\\purple{${Charge}}` : Charge,
    expCharge: boxedIndex == 1 ? `\\purple{${ExpCharge}}` : ExpCharge,
    radius: boxedIndex == 2 ? `\\purple{${Radius}}` : Radius,
    expRadius: boxedIndex == 3 ? `\\purple{${ExpRadius}}` : ExpRadius,
  };

  const html = katex.renderToString(
    `{${Data.charge}
        \\times 10^{${Data.expCharge}}C
        \\over 4 \\pi \\epsilon_0 ({${Data.radius}
        \\times 10^{${Data.expRadius}}m})^2} = ${Result}`
  );

  return (
    <span
      className="text-2xl text-[#474747] dark:text-white md:text-3xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Formule;
