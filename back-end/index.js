import express from 'express';
import { getData } from './helpers/getData.js';

const app = express();
const port = 3300;
const inicidentData = await getData();

app.get('/data', async (req, res) => {
	res.send(JSON.stringify(inicidentData));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
