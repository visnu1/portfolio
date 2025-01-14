import styles from './Rating.module.css';
import Image from "next/image";

export const Rating = ({ total = 5, value = 0 }: { total: number, value: number }) => {
    if (value > total) total = value;

    const filledStars = Math.floor(value);
    const halfStars = value - filledStars > 0 ? 1 : 0;
    const emptyStars = total - filledStars - halfStars;

    return (
        <div className='d-flex align-center'>
            {/* Filled Stars */}
            {Array.from({ length: filledStars }).map((_, index) => (
                <div key={`filled-${index}`} className={styles.icoCtn}>
                    <Image className={styles.img} src="/star-filled.svg" alt="filled star" width={50} height={50} />
                </div>
            ))}

            {/* Partial Star */}
            {halfStars > 0 && (
                <div key="partial" className={styles.icoCtn}>
                    <Image className={styles.img} src="/star-half.svg" alt="partial star" width={50} height={50} />
                </div>
            )}

            {/* Empty Stars */}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <div key={`empty-${index}`} className={styles.icoCtn}>
                    <Image className={styles.img} src="/star-empty.svg" alt="empty star" width={50} height={50} />
                </div>
            ))}
        </div>
    );
};
