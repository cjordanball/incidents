import React from 'react';
import { Icon } from '@iconify/react';
import styles from './locPin.module.css';

interface LocationPinProps {
	lat: number;
	lng: number;
	text: string;
}

const LocationPin = ({ text }: LocationPinProps) => {
	return (
		<div className={styles.container}>
			<Icon icon='ph:map-pin-fill' className={styles.pin} />
			<div className={styles.text}>{text}</div>
		</div>
	);
};

export default LocationPin;
