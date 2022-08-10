import { ButtonHTMLAttributes, DOMAttributes, ReactNode } from "react";
import cx from "classnames";

const styles = {
  primary:
    "py-2 px-4 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",
  secondary:
    "py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",
};

interface Props {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: "primary" | "secondary";
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
}

const Button = ({ children, type, variant = "primary", onClick }: Props) => {
  return (
    <button className={cx(styles[variant])} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
