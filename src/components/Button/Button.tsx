import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return <button className="bg-sky-600 px-4 h-12">{children}</button>;
};
