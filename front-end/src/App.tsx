import { useEffect, useState } from 'react';
import { fetchData } from './helpers';
import styles from './app.module.css';
import { Map } from './components';

const App = () => {
	const [data, setData] = useState<any>();

	const getData = async () => {
		console.log('GETTING DATA');
		const data = await fetchData('https://localhost:3300/data');
		setData(data);
	};

	useEffect(() => {
		getData();
	}, []);
	console.log('DATA: ', data);
	return data ? (
		<div className={styles.container}>
			<div className={styles.mapRegion}>
				<Map
					location={{
						lat: data?.data[0].address.latitude,
						lng: data?.data[0].address.longitude,
					}}
					zoomLevel={10}
				/>
			</div>
			<div className={styles.listRegion}>Oh, no</div>
		</div>
	) : null;
};

export default App;
