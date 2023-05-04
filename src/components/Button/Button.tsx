import React from "react";
import styles from "./Button.module.css";

interface Props {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
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
