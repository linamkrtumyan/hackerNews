import React from "react";

import { ButtonProps } from "../../model";

import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <button
      className={
        variant === "primary" ? styles.primaryButton : styles.secondaryButton
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
