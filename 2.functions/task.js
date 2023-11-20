function getArrayParams(...arr) {
	let min, max, sum, avg;
	min = arr[0];
	max = min;
	sum = 0;
	n = 0;
	for (i=0; i < arr.length ; ++i){
	  if (arr[i] > max) max = arr[i];
	  if (arr[i] < min) min = arr[i];
	  sum += arr[i];
	  n++;
	}
	avg = Number((sum/n).toFixed(2));
	
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
