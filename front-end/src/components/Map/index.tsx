import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './map.module.css';
// const API_KEY = process.env['process.env.REACT_APP_MAP_API_KEY'];

interface MapProps {
	location: {
		lat: number;
		lng: number;
	};
	zoomLevel: number;
}

const Map = ({ location, zoomLevel }: MapProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.map}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY || '' }}
					defaultCenter={location}
					defaultZoom={zoomLevel}
				>
					{/* <LocationPin lat={location.lat} lng={location.lng} text={`Toast`} /> */}
				</GoogleMapReact>
			</div>
		</div>
	);
};

export default Map;
