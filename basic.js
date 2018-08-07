function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

function reverseString(str) {
  //turn string into array
  var str = str.split("");			//turn string into array (use empty string to split between each character)

  //reverse array
  var str= str.reverse();			//reverse array

  // turn array into string
  var str = str.join("");			//turn array into one string

  //return str
  return str;
}


function factorialize (num){
	for (a = 1; num >= 1; num--){			//start variable a of at 1 but that variable will change
		a = num * a;						//
	}
	return a;
}

function findLongestWord (str){
	var words = str.split(' ');
	var maxLength = 0;				//stores the greatest length

	for (var i = 0; i < words.length; i++){
		if (words[i].length > maxLength){
			maxLength = words[i].length;
		}
	}
	return maxLength;
}

function largestOfFour(arr){
	var solution = [];					//need brackets to make an array
	for (var i = 0; i < arr.length;i++){
		var maxLength = arr[i][0];
		for(var n = 1; n < arr[i].length; n++){
			if(arr[i][n] > maxLength){
				var maxLength = arr[i][n];
			}
		}
		solution[i] = maxLength;			//there is an array with solution and i in brackets is the array that is being selected
	}
	return solution;
}

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

function repeatStringNumTimes(str, num) {
var solution = str;
if (num > 0){
	for (var i = 1; i < num; i++){
		solution = solution + str;
	}
}

else if (num < 0){
//return empty string
return "";
}
return solution;
}

function truncateString(str, num) {
if (str.length > num){
	var str = str.substr(0,num) + "...";
}
return str;
}

function findElement(arr, func) {
// var solution = [];
for (var i = 0; i < arr.length; i++){
	if (func(arr[i]) === true){
		var solution = arr[i];
		return solution;
	}
	if (arr[i] !== func){
		var solution = undefined;
	}
}
return solution;
}

function booWho(bool) {
if (bool === true || bool === false ){
	return true;
}
else {
	return false;
}
}

function frankenSplice(arr1, arr2, n) {
var a = arr2.slice(0);						//doesnt change original array(just returns it and puts it in a new container )
var i = a.splice(n,0,...arr1);				//shoutout to spread operator
return a;
}

function mutation(arr) {
var arr = arr[0].toLowerCase().arr[1].toLowerCase();
// if (arr){
// 	return true;
// }

// else {
// 	return false;
// }
return arr;
}

































