import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}
const Button = ({ children, className, ...rest }: Iprops) => {
  return (
    <button {...rest} className={`  text-white ${className} p-2 rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
