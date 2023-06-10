import axios from 'axios';
const API_KEY = process.env['METEOSTAT_API_KEY'];
console.log('API_KEY: ', API_KEY);

export const fetchNearbyStation = async (lat, lon) => {
	const options = {
		method: 'GET',
		url: 'https://meteostat.p.rapidapi.com/stations/nearby',
		params: {
			lat,
			lon,
		},
		headers: {
			'X-RapidAPI-Key': API_KEY,
			'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
		},
	};
	try {
		const response = await axios.request(options);
		return response.data.data[0];
	} catch (err) {
		console.error('ERROR: ', err);
	}
};
