import axios from 'axios';
const API_KEY = process.env['METEOSTAT_API_KEY'];

export const fetchNearbyStation = async (lat, lon) => {
	const options = {
		method: 'GET',
		url: 'https://meteostat.p.rapidapi.com/stations/nearby',
		params: {
			lat,
			lon,
		},
		headers: {
			'X-RapidAPI-Key': 'b504586bbfmshe38fb1705e4f33ap1bf324jsn0801aeb59dda',
			'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
		},
	};
	try {
		const response = await axios.request(options);
		console.log(response.data);
		return response.data.data[0];
	} catch (err) {
		console.error('ERROR: ', err);
	}
};
