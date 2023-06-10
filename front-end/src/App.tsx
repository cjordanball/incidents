import { useEffect, useState } from 'react';
import { fetchData } from './helpers';
import styles from './app.module.css';
import { Map, ListComponent } from './components';

const App = () => {
	const [data, setData] = useState<any>();
	const [hotId, setHotId] = useState<string>();

	const getData = async () => {
		const data = await fetchData('http://127.0.0.1:3300/data');
		setData(data);
	};

	useEffect(() => {
		getData();
	}, []);

	const hotIncident = data?.data.find((incident: any) => {
		return hotId
			? incident.description.event_id === hotId
			: incident.description.event_id === data?.data[0].description.event_id;
	});

	return hotIncident ? (
		<div className={styles.container}>
			<div className={styles.mapRegion}>
				<Map
					location={{
						lat: hotIncident.address.latitude,
						lng: hotIncident.address.longitude,
					}}
					text={hotIncident.description.event_id}
					zoomLevel={11}
				/>
			</div>
			<div className={styles.listRegion}>
				<ListComponent
					chooseIncident={(e) => {
						setHotId(e);
					}}
					selectedIncident={hotId}
					incidentData={data}
				/>
			</div>
		</div>
	) : null;
};

export default App;
