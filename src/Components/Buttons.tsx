import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  value: any;
}

const Buttons = ({ value, ...props }: Props) => {
  return <button {...props}>{value}</button>;
};

export default Buttons;
