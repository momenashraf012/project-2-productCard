import type { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      type="text"
      {...rest}
      className="p-2 rounded-md  border-2 focus:outline-none bg-gray-50 focus:bg-white    "
    />
  );
};

export default Input;
