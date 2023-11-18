"use strict"
function solveEquation(a, b, c) {

  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
   arr = [];
  } else if (d === 0) {
	arr = [-b/(2*a)];
  } else if (d > 0) {
	arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let deltaCredit = amount - contribution;
  let monthPay = deltaCredit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  let totalPay = parseFloat((monthPay * countMonths).toFixed(2));

  return totalPay; 
}