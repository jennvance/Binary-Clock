(function(){
	//ensure digital clock displays 2 digits for numbers less than 10
	var checkTime = function(i){
		return (i <10) ? "0" + i : i;
	}

	var startTime = function(){
		var now = new Date();
		//render realtime digital clock in browser
		hours = checkTime(now.getHours());
		minutes = checkTime(now.getMinutes());
		seconds = checkTime(now.getSeconds());
		$('#time').html(hours + ":" + minutes + ":" + seconds);
		//end realtime digital clock

		//grab binary numbers using native JS methods
		var hoursBinary = now.getHours().toString(2);
		var minsBinary = now.getMinutes().toString(2);
		var secsBinary = now.getSeconds().toString(2);

		//ensure all binary numbers are 6 digits
		//could also use :nth-last-child to remedy the issue instead
		var makeSix = function(binaryString){
			if(binaryString.length === 1){
				return "00000" + binaryString;
			}
			if(binaryString.length === 2){
				return "0000" + binaryString;
			}
			if(binaryString.length === 3){
				return "000" + binaryString;
			}
			if(binaryString.length === 4){
				return "00" + binaryString;
			} 
			if(binaryString.length === 5){
				return "0" + binaryString;
			}
			else {
				return binaryString;
			}
		}
		//call makeSix() on all variables containing binary
		var newHours = makeSix(hoursBinary);
		var newMins = makeSix(minsBinary);
		var newSecs = makeSix(secsBinary);
		console.log("The time in binary is:", newHours, newMins, newSecs);
		


		//decrementing for loop to grab each digit of the binary
		//since native methods don't return leading zeroes
		var x = function(){
			// for(var i=hoursBinary.length-1; i >= 0; i--){
			// } 
				if(newHours[5] === "1"){
					$('#hour1').addClass('on');
				} else {
					$('#hour1').removeClass('on');
				}
				if(newHours[4] === "1"){
					$('#hour2').addClass('on');
				} else {
					$('#hour2').removeClass('on');
				}
				if(newHours[3] === "1"){
					$('#hour4').addClass('on');
				} else {
					$('#hour4').removeClass('on');
				}
				if(newHours[2]==="1"){
					$('#hour8').addClass('on');
				} else {
					$('#hour8').removeClass('on');
				}
				if(newHours[1]==="1"){
					$('#hour16').addClass('on');
				} else {
					$('#hour16').removeClass('on');
				}
				if(newHours[0]==="1"){
					$('#hour32').addClass('on');
				} else {
					$('#hour32').removeClass('on');
				}
		};x();

		var y = function(){
			if(newMins[5]==="1"){
				$('#min1').addClass('on');
			} else {
				$('#min1').removeClass('on');
			}
			if(newMins[4]==="1"){
				$('#min2').addClass('on');
			} else {
				$('#min2').removeClass('on');
			}
			if(newMins[3]==="1"){
				$('#min4').addClass('on');
			} else {
				$('#min4').removeClass('on');
			}
			if(newMins[2]==="1"){
				$('#min8').addClass('on');
			} else {
				$('#min8').removeClass('on');
			}
			if(newMins[1]==="1"){
				$('#min16').addClass('on');
			} else {
				$('#min16').removeClass('on');
			}
			if(newMins[0]==="1"){
				$('#min32').addClass('on');
			} else {
				$('#min32').removeClass('on');
			}
		};
		y();
		
		var z = function(){
			if(newSecs[5]==="1"){
				$('#sec1').addClass('on');
			} else {
				$('#sec1').removeClass('on');
			}
			if(newSecs[4]==="1"){
				$('#sec2').addClass('on');
			} else {
				$('#sec2').removeClass('on');
			}
			if(newSecs[3]==="1"){
				$('#sec4').addClass('on');
			} else {
				$('#sec4').removeClass('on');
			}
			if(newSecs[2]==="1"){
				$('#sec8').addClass('on');
			} else {
				$('#sec8').removeClass('on');
			}
			if(newSecs[1]==="1"){
				$('#sec16').addClass('on');
			} else {
			 	$('#sec16').removeClass('on');
			}
			if(newSecs[0]==="1"){
				$('#sec32').addClass('on');
			} else {
				$('#sec32').removeClass('on');
			}
		};
		z();

		setTimeout(function(){
			startTime();
		}, 1000);
	}
	startTime();
})();





