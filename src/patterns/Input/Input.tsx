import styles from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}

export function Input(props: InputProps) {
  const { placeholder, value, onChange, type, className } = props;

  return (
    <input
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}
