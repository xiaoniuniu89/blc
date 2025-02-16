import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Card(props: CardProps) {
  const { title, children, onClick, className } = props;

  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {title && <h3>{title}</h3> }
      <div>{children}</div>
    </div>
  );
}
