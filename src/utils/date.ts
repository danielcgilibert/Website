export const getDateFromString = (str) => {
	const [date, time] = str.split(' ')
	// reformat string into YYYY-MM-DDTHH:mm:ss.sssZ
	str = `${date}T${time}.000Z`
	return new Date(str)
}
