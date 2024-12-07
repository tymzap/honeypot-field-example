import type { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  type?: "button" | "submit";
  isLoading?: boolean;
}>;

export function Button({ children, type, isLoading }: ButtonProps) {
  return (
    <button type={type} disabled={isLoading} className={styles.button}>
      {isLoading ? "Loading" : children}
    </button>
  );
}
