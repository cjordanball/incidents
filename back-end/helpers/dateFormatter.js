export const dateFormatter = (dateTime) => {
	const dateTimeArray = dateTime.split('T');
	const date = dateTimeArray[0];
	const timeObject = dateTimeArray[1].match(/(\d{2}):(\d{2}):(\d{2})/);
	const timeOffset = parseInt(dateTimeArray[1].split('-')[1].slice(0, 2), 10);
	return {
		dateString: date,
		hourString:
			parseInt(timeObject[2], 10) > 30
				? (parseInt(timeObject[1], 10) + 1).toString()
				: timeObject[1],
		timeOffset: timeOffset,
	};
};
