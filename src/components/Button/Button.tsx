import React from "react";

export type ButtonProps = {
  children: string;
  size?: "sm" | "md" | "xl";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, size, ...props }) => {
  return (
    <button {...props}>
      {children}
      {size}
    </button>
  );
};

export default Button;
