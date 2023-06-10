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
	return allFiles.sort((incident1, incident2) =>
		new Date(incident1.description.event_opened) >
		new Date(incident2.description.event_opened)
			? 1
			: -1
	);
};

export { getData };
