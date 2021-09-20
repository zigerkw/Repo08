// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber();
console.log(randomRangeNumber(5, 50));
// Only change code above this line
module.exports = randomRangeNumber;