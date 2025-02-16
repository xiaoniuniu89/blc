import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { label, variant, disabled, onClick, className } = props;

  return (
    <button
      className={`${styles.button} ${variant === "primary" ? styles.primary : variant ==="secondary" ? styles.secondary : styles.tertiary} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
