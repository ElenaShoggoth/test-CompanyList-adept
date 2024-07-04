import React from "react";
import styles from "./../../styles/AddCompanyForm.module.scss";

interface TextInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={styles["input-field"]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
