import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  icon?: boolean;
  className?: string;
  iconName?: React.ComponentType<{ size?: number; className?: string }>;
  onClick?: () => void;
}
export default function Button({
  text,
  icon,
  iconName: IconComponent,
  className,
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <div
      onClick={onClick}
      className={`${styles.button} ${styles[className == undefined ? "" : className]}`}
    >
      {icon && IconComponent && (
        <div className={styles.icon}>
          <IconComponent size={16} />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
}
