const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const dateFormat = (date: string) => {
	const dateString = date.split('T')[0];
	const dateArray = dateString.split('-');
	const returnDate = `${dateArray[2]} ${
		months[parseInt(dateArray[1], 10) - 1]
	} ${dateArray[0]}`;
	return returnDate || '';
};

export default dateFormat;
