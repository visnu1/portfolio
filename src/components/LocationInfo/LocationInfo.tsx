import React from 'react';
import styles from './LocationInfo.module.css';
import Image from "next/image";

interface LocationInfoProps {
  location: string;
  iconSrc?: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ location, iconSrc = '/location.svg' }) => {
  return (
    <div className="d-flex align-center">
      <div className={styles.locIco}>
        <Image className={styles.img} src={iconSrc} alt="location pin" width={20} height={20} />
      </div>
      <div className={styles.locText}>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default LocationInfo;
