import styles from './Chip.module.css';
import Image from "next/image";

interface ChipProps {
    html: string;
    icon?: string;
    alt?: string;
}

export const Chip: React.FC<ChipProps> = ({ html, icon, alt = "" }) => {
    return (
        <div className={styles.chipCtn}>
            <div className={`${styles.iconWrapper} d-flex`} tabIndex={0}>
                {icon && (
                    <div className='d-flex align-center mr-2'>
                        <div className={styles.imgWrapper}>
                            <Image className={styles.img} src={icon} alt={alt} width={50} height={50} />
                        </div>
                    </div>
                )}
                <div className={styles.txtCtn}>
                    <p>{html}</p>
                </div>
            </div>
        </div>
    );
}
