function getArrayParams(...arr) {
	let min, max, sum;
	min = arr.shift();
	max = arr.shift();
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
	  sum += arr[i]
		if (arr[i] > max) {
		 max === arr[i];
	  }else if (arr[i] < min) {
		 min === arr[i];
	  }
	}
	avg = parseFloat((sum / arr.length).toFixed(2));
	return { min: min, max: max, avg: avg };
 }

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
