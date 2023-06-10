import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './map.module.css';
import { LocationPin } from '../../components';

interface MapProps {
	location: {
		lat: number;
		lng: number;
	};
	text: string;
	zoomLevel: number;
}

const Map = ({ location, text, zoomLevel }: MapProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.map}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY || '' }}
					defaultCenter={location}
					defaultZoom={zoomLevel}
				>
					<LocationPin lat={location.lat} lng={location.lng} text={text} />
				</GoogleMapReact>
			</div>
		</div>
	);
};

export default Map;
