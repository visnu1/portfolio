import styles from "./Icon.module.css";
import Image from "next/image";

interface IconProps {
    path: string;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ path, size = 20 }) => {
    return (
        <div style={{ width: size, height: size }}>
            <Image className={styles.img} src={path} alt="path" width={size} height={size} />
        </div>
    );
}
