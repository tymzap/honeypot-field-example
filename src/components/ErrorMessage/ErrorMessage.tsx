import { PropsWithChildren } from "react";
import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = PropsWithChildren;

export function ErrorMessage({ children }: ErrorMessageProps) {
  if (!children) {
    return null;
  }

  return <span className={styles.message}>{children}</span>;
}
