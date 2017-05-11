var number = 0;

for (var i = 3; i <= 1000; i++){

	if (i % 3 == 0 || i % 5 == 0){
		number += i;
	}
}

alert("The total sum of multiples of 3 or 5 between 0 and 1000 is: " + number);