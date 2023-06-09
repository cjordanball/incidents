import { readdir, readFile } from 'node:fs/promises';

const getData = async () => {
	const allFiles = [];
	try {
		const files = await readdir('./data');
		for (const file of files) {
			const filePath = new URL('../data/' + file, import.meta.url);
			const contents = await readFile(filePath, 'utf-8');
			allFiles.push(JSON.parse(contents));
		}
	} catch (error) {
		console.error(error);
	}
	return allFiles;
};

export { getData };
