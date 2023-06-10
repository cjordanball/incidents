import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapContainerProps {
	pinLocation?: {
		name: string;
		location: {
			lat: number;
			lng: number;
		};
	};
}

const MapContainer = ({ pinLocation }: MapContainerProps) => {
	const mapStyles = {
		height: '100vh',
		width: '100%',
	};

	const location = {
		name: 'Location 1',
		location: {
			lat: 37.466513,
			lng: -77.428683,
		},
	};

	const defaultCenter = {
		lat: 37.541885,
		lng: -77.440624,
	};

	return (
		<LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY || ''}>
			<GoogleMap mapContainerStyle={mapStyles} zoom={11} center={defaultCenter}>
				{pinLocation ? <Marker position={pinLocation.location} /> : null}
			</GoogleMap>
		</LoadScript>
	);
};
export default MapContainer;

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.map}>
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY || '' }}
// 					defaultCenter={location}
// 					defaultZoom={zoomLevel}
// 				>
// 					<LocationPin lat={location.lat} lng={location.lng} text={text} />
// 				</GoogleMapReact>
// 			</div>
// 		</div>
// 	);
// };

// export default Map;
