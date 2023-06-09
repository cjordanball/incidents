import express from 'express';
import { getData } from './helpers/getData.js';
import { fetchNearbyStation } from './helpers/stationFetch.js';

const app = express();
const port = 3300;
const inicidentData = await getData();
for (const incident of inicidentData) {
	const station = await fetchNearbyStation(
		incident.address.latitude,
		incident.address.longitude
	);
	console.log('Station: ', station);
}

app.get('/data', async (req, res) => {
	res.send(JSON.stringify(inicidentData));
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
