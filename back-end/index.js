import express from 'express';
import { getData } from './helpers/getData.js';
import { fetchNearbyStation } from './helpers/stationFetch.js';
import { fetchWeather } from './helpers/weatherFetch.js';
import { dateFormatter } from './helpers/dateFormatter.js';
import { conditions } from './helpers/weatherCodes.js';

const app = express();
const port = 3300;
const incidentData = await getData();
const totalData = [];
let counter = 0;
const dataLength = incidentData.length;
const killInterval = setInterval(async () => {
	const incident = incidentData[counter];
	const station = await fetchNearbyStation(
		incident.address.latitude,
		incident.address.longitude
	);
	const { dateString, timeOffset } = dateFormatter(
		incident.description.event_opened
	);
	console.log('offset: ', timeOffset);
	const weather = await fetchWeather(station.id, dateString, dateString);
	console.log('weather: ', weather[timeOffset]);
	const weatherObj = {
		temperature: weather[timeOffset].temp
			? `${(parseInt(weather[timeOffset].temp, 10) * 9) / 5 + 32}`
			: 'Unknown',
		humidity: weather[timeOffset].temp
			? `${weather[timeOffset].rhum}%`
			: 'Unknown',
		conditions: conditions[weather[timeOffset].coco] ?? 'Unknown',
	};
	totalData.push({ ...incident, weatherObj });
	if (counter === dataLength - 1) {
		clearInterval(killInterval);
	}
	counter++;
}, 2000);

app.get('/data', async (req, res) => {
	console.log(totalData);
	res.send(JSON.stringify(totalData));
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
