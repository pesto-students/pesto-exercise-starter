function timeWas(time, now) {
	const timeElapsed = now - time;
	let message = '';

	const SECONDS = 1000;
	const MINUTES = SECONDS * 60;
	const HOURS = MINUTES * 60;
	const DAYS = HOURS * 24;
	const WEEKS = DAYS * 7;
	const MONTHS = DAYS * 30;
	const YEARS = MONTHS * 12;

	let quantity;
	let unit = '';

	if (Math.floor(timeElapsed / MINUTES) < 1) {
		quantity = Math.floor(timeElapsed / SECONDS);
		unit = 'second';
	} else if (Math.floor(timeElapsed / HOURS) < 1) {
		quantity = Math.floor(timeElapsed / MINUTES);
		unit = 'minute';
	} else if (Math.floor(timeElapsed / DAYS) < 1) {
		quantity = Math.floor(timeElapsed / HOURS);
		unit = 'hour';
	} else if (Math.floor(timeElapsed / WEEKS) < 1) {
		quantity = Math.floor(timeElapsed / DAYS);
		unit = 'day';
	} else if (Math.floor(timeElapsed / MONTHS) < 1) {
		quantity = Math.floor(timeElapsed / WEEKS);
		unit = 'week';
	} else if (Math.floor(timeElapsed / YEARS) < 1) {
		quantity = Math.floor(timeElapsed / MONTHS);
		unit = 'month';
	} else if (Math.floor(timeElapsed / YEARS) >= 1) {
		quantity = Math.floor(timeElapsed / YEARS);
		unit = 'year';
	}

	if (unit === 'second' && quantity <= 5) {
		unit = 'just now';
	} else if (quantity > 1) {
		message = quantity + ' ' + unit + 's ago';
	}
	return message;
}

/*
function timeWas(time, now) {
	// const NOW = new Date();
	const SECONDS = 1000;
	const MINUTES = SECONDS * 60;
	const HOURS = MINUTES * 60;
	const DAYS = HOURS * 24;
	const WEEKS = DAYS * 7;
	const MONTHS = DAYS * 30;
	const YEARS = MONTHS * 12;

	let timeElapsed = now - time;


	const unitsArray = [SECONDS, MINUTES, HOURS, DAYS, WEEKS, MONTHS, YEARS];
	const unitNamesArray = ['second', 'minute', 'hours', 'day', 'week', 'month', 'year'];

	let i = 0;

	while (timeElapsed / unitsArray[i] > 1 && i < unitsArray.length ){

		i++;
	}

    timeElapsed = Math.floor(timeElapsed/unitsArray[i-1]);
    const unit = unitNamesArray[i-1];

    if(unit === 'second' && timeElapsed < 1) {
    	return 'just now'
    } else if(timeElapsed > 1) {
        return `${timeElapsed} ${unitNamesArray[i-1]}s ago`
    } else {
    	return `${timeElapsed} ${unitNamesArray[i-1]} ago`
    }

}

*/

export { timeWas };
