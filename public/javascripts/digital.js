//Unfinished, but won't be too hard I think
//Lines 19-25 and lines 32-38 do the exact same thing but return slightly different results
//but...why? Math is faster than string-related methods?
//The logic is complete, now just need to attach to DOM elements
(function(){
	//ensure digital clock displays 2 digits for numbers less than 10
	var checkTime = function(i){
		return (i <10) ? "0" + i : i;
	}

	var startTime = function(){
		var now = new Date();

		hours = checkTime(now.getHours());
		minutes = checkTime(now.getMinutes());
		seconds = checkTime(now.getSeconds());

		//Grab value of each digit
		var a = Math.floor(hours / 10);
		var a2 = hours % 10;
		var b = Math.floor(minutes / 10);
		var b2 = minutes % 10;
		var c = Math.floor(hours / 10);
		var c2 = seconds % 10;
		console.log(a, a2, b, b2, c, c2)

		//render realtime digital clock in browser
		$('#time').html(hours + ":" + minutes + ":" + seconds);
		//end realtime digital clock

		//grab individual digits of digital time
		var hourDigit1 = hours.toString().charAt(0);
		var hourDigit2 = hours.toString().charAt(1);
		var minuteDigit1 = minutes.toString().charAt(0);
		var minuteDigit2 = minutes.toString().charAt(1);
		var secondDigit1 = seconds.toString().charAt(0);
		var secondDigit2 = seconds.toString().charAt(1);

		console.log(hourDigit1, hourDigit2, minuteDigit1, minuteDigit2, secondDigit1, secondDigit2)
	

		setTimeout(function(){
			startTime();
		}, 1000);
	}
	startTime();
})();