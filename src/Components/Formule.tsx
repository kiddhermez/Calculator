"use client";

import "katex/dist/katex.min.css";
import katex from "katex";

interface Props {
  boxedIndex: number;
}

const formules = [
  "{\\orange{\\boxed{}} \\times 10^{\\boxed{}} \\over 4 \\pi \\epsilon_0 ({\\boxed{} \\times 10^{\\boxed{}}})^2}",
  "{\\boxed{} \\times 10^{\\orange{\\boxed{}}} \\over 4 \\pi \\epsilon_0 ({\\boxed{} \\times 10^{\\boxed{}}})^2}",
  "{\\boxed{} \\times 10^{\\boxed{}} \\over 4 \\pi \\epsilon_0 ({\\orange{\\boxed{}} \\times 10^{\\boxed{}}})^2}",
  "{\\boxed{} \\times 10^{\\boxed{}} \\over 4 \\pi \\epsilon_0 ({\\boxed{} \\times 10^{\\orange{\\boxed{}}}})^2}",
];

const Formule = ({ boxedIndex }: Props) => {
  const html = katex.renderToString(formules[boxedIndex]);
  return (
    <div className="text-5xl">
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Formule;
