const axiso = require('axios');

const API_KEY = process.env.METEOSTAT_API_KEY;

const options = {
	method: 'GET',
	url: 'https://api.meteostat.net/v2/stations/nearby',
	params: {
	},
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'


	}




