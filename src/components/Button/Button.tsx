import styles from "./Button.module.css";
import Image from "next/image";

interface ButtonProps {
    name: string;
    href?: string;
    icon?: string;
    alt?: string;
    className?: string;
    compStyles?: React.CSSProperties;
    target?: HTMLAnchorElement["target"];
    click?: any
}

export const Button: React.FC<ButtonProps> = ({
    name,
    icon,
    alt = "",
    href,
    target = "_self",
    className = "",
    compStyles,
    click
}) => {
    const shouldAddTarget = href !== undefined;

    return (
        <a
            role="button"
            className={`${styles.btn} d-flex align-center txt-props ${className}`}
            href={href || undefined}
            style={compStyles}
            target={shouldAddTarget ? target : undefined}
            aria-label={name}
            onClick={click}
        >
            {icon && (
                <div className={`${styles.iconctn} mr-1`}>
                    <Image className={styles.img} src={icon} alt={alt} width={50} height={50} />
                </div>
            )}
            <p className="button-text">{name}</p>
        </a>
    );
};
