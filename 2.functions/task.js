function getArrayParams(...arr) {
	let min, max, sum;
	min = Infinity;
	max = -Infinity;
	sum = min + max;
	avg = parseFloat((sum / arr.length).toFixed(2));
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] > max) {
		 max === arr[i];
	  }else if (arr[i] < min) {
		 min === arr[i];
	  }
	}
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
