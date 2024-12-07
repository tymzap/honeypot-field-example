import styles from "./Input.module.css";

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  isRequired?: boolean;
};

export function Input({
  name,
  label,
  type = "text",
  isRequired = false,
}: InputProps) {
  return (
    <label className={styles.label}>
      {label}:{" "}
      <input
        type={type}
        name={name}
        required={isRequired}
        className={styles.input}
      />
    </label>
  );
}
