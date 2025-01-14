import React from "react";
import styles from "./HighlightCard.module.css";
import Image from "next/image";

interface HighlightCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
    additionalComps?: React.ReactNode[];
}

const HighlightCard: React.FC<HighlightCardProps> = ({
    title,
    description,
    icon,
    className = "",
    additionalComps = [],
}) => {
    return (
        <div className={`${styles.highlightCard} d-flex flex-column ${className}`}>
            <div>
                <div className={styles.cardBadge}>
                    <Image className={styles.img} src={icon} alt={title} width={50} height={50} />
                </div>
            </div>

            <div className={`${styles.cardBody} d-flex flex-column`}>
                <div className={`${styles.cardBodyWrapper} d-flex flex-column`}>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <p>{description}</p>
                    </div>
                </div>

                {additionalComps.length > 0 && (
                    <div className={styles.cardFooter}>
                        {additionalComps.map((Component, index) => (
                            <div key={index}>
                                {Component}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HighlightCard;
