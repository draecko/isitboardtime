var today = new Date();

today.setHours(17);
today.setMinutes(0);
today.setSeconds(0);
today.setDate(13);
today.setMonth(0);
today.setYear(2017);

CountDownTimer(today, 'countdown');

function CountDownTimer(dt, id) {
	var end = dt;
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;

		if (distance <= 0) {
			document.getElementById(id).innerHTML = 'FUCK YES!';
			return;
		}

		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById(id).innerHTML = 'NO.<br>';
		
		if (days==1) {
			document.getElementById(id).innerHTML += days + ' FUCKING DAY,<br>';
		} else if (days==0) {
			document.getElementById(id).innerHTML += days + '';
		} else {
			document.getElementById(id).innerHTML += days + ' FUCKING DAYS,<br>';
		}

		if(hours==1){
			document.getElementById(id).innerHTML += hours + ' FUCKING HOUR, ';
		} else if (hours==0) {
			document.getElementById(id).innerHTML += '';
		} else {
			document.getElementById(id).innerHTML += hours + ' FUCKING HOURS, ';
		}

		if(minutes==1){
			document.getElementById(id).innerHTML += minutes + ' MINUTE, AND ';
		} else if (hours==0 && minutes==0){
			document.getElementById(id).innerHTML += ' FUCKING ';
		} else if (minutes==0){
			document.getElementById(id).innerHTML += ' AND ';
		} else {
			document.getElementById(id).innerHTML += minutes + ' MINUTES, AND ';
		}

		if(seconds==1){
			document.getElementById(id).innerHTML += seconds + ' SECOND REMAINING.';
		} else {
			document.getElementById(id).innerHTML += seconds + ' SECONDS REMAINING.';
		}
	}

	timer = setInterval(showRemaining, 1000);
}