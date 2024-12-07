type HoneypotInputProps = {
  name: string;
  type?: string;
};

export function HoneypotInput({ name, type = "text" }: HoneypotInputProps) {
  return (
    <input
      type={type}
      name={name}
      style={{ display: "none" }}
      tabIndex={-1}
      autoComplete="off"
    />
  );
}
