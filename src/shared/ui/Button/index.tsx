import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button className={`${className}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
