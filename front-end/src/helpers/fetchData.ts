import { testData } from '../testData';
const fetchData = async (url: string) => {
	const response = await fetch(url);
	console.log(response);
};

// const fetchData = async (url: string) => {
// 	return testData;
// };

export default fetchData;
