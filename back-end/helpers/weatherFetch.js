import axios from 'axios';
const API_KEY = process.env.METEOSTAT_API_KEY;
console.log('toast: ', process.env.METEOSTAT_API_KEY);

export const fetchWeather = async (station, start, end) => {
	const options = {
		method: 'GET',
		url: 'https://meteostat.p.rapidapi.com/stations/hourly',
		params: {
			station,
			start,
			end,
			tz: 'EST',
		},
		headers: {
			'X-RapidAPI-Key': 'b504586bbfmshe38fb1705e4f33ap1bf324jsn0801aeb59dda',
			'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
		},
	};
	try {
		const response = await axios.request(options);
		return response.data.data;
	} catch (err) {
		console.error('ERROR: ', err);
	}
};
