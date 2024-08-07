import React, { useState } from "react";

interface InputProps {
  label: string;
  value: string;
  name: string;
  width?: string;
  type: string;
  [key: string]: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  type,
  width,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isFilled = value.length > 0;

  return (
    <div className="relative mb-6">
      <label
        className={`absolute left-0 font-medium text-xs -top-3 transition-all  duration-300  ${
          isFocused || isFilled ? "text-black" : "text-[#8D8D8D]"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        {...props}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={` border-b-2 px-2 py-2 bg-transparent transition-all outline-none duration-300  ${
          width ? width : ""
        } ${
          isFocused || isFilled ? "border-b-2 border-black" : "border-[#8D8D8D]"
        }`}
      />
    </div>
  );
};

export default Input;
