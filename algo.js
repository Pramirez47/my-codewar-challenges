function accum(s) {
  s          = s.toLowerCase();                  //make every letter lowercase
  s          = s.split("");                      //turn string into array
  var count  = 1;
  var result = s.map(function(x,count){
  	count ++;
    return x.repeat(count);
  });
  result     = result.map(function(x){
  	 return x.charCodeAt(0).toUpperCase();
  })
 return result.join("-");
}

function positiveSum(arr) {
	var result  = 0;
	for(var i   = 0; i < arr.length; i++){
		if(arr[i] > 0){
			result   += arr[i];
		}
	}
	return result;
}

function printerError(s) {
	var find    = 0;
	var arr     = s.split("");
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
	for (var k  = 0; k < arr.length; k++){
		for (var i = 0; i < letters.length; i++){
			var index = arr[k].indexOf(letters[i]);
				if (index !== -1){
					find    = find + 1;
				}
		}
	}
	var total   = arr.length - find;
	return (total.toString() + "/" + arr.length.toString());
}

function printerErrorv2(s){
	var count = 0;
	for (var i = 0; i < s.length; i++){
		if (s[i] > "m"){					//if letter is after m in alphabet(reason for the > sign), run this loop(a letter can be greater than another letter in js???)
			count++;						//add one to errors
		}
	}
	return count + "/" + s.length;			//turns everything into string because of (+ "/" +)
}                    //not mine                       //not mine

function binaryArrayToNumber(arr){
	var total  = 0;
	var k      = 1
	for (var i = 1; i <= arr.length; i++){
		if (arr[arr.length - i] === 1){
			total    = total + k;
		}
	k          = k * 2;								// always use = ?? (k *2; did not work here) also needed this statement after if block
	}
	return total;
};

function getCount(str) {
	var vowelsCount = 0;
	var arr         = str.split("");
	const vowels    = ["a","e","i","o","u"];
	for(var i       = 0; i < arr.length; i++){
		for(var k      = 0; k < vowels.length; k++){
			if (arr[i] === vowels[k]){
				vowelsCount  = vowelsCount + 1;
			}
		}
	}
 	return vowelsCount;
}

function array_diff(a, b) {
	var result      = a.filter(i => i !== b[0]);
	return result;
}

function digits(num){
	var newString = num.toString();
	var newArr    = newString.split("");
	var backToNum = newArr.map(function(a){
		a            = parseInt(a,10);
		return a;
	});
	var numberArr = [];
	for (var i    = 0; i < backToNum.length; i++){
		var sum      = 0;
		for (var j   = i + 1; j < backToNum.length; j++){
			sum         = backToNum[i] + backToNum[j];
			numberArr.push(sum);
		}
	}
	return numberArr;
}

function isAnagram (test, original) {
	var originalArr = original.toLowerCase().split("");
	var testArr = test.toLowerCase().split("");
	var counter = 0;
	var hi = (function(){
		for (var i = 0; i < testArr.length; i++){
			for (var j = 0; j < originalArr.length; j++){
				if (testArr[i] === originalArr[j]){
					counter++;
					break;
				}
			}
		}
		return counter;
	})();
	if (hi === test.length && test.length === original.length){
		return true;
	}
	else{
		return false;
	}
}

function isAnagramv2 (test,original){
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}           //not mine              //not mine

function oddNotPrime(n){
	var newArr     = (function(){
		var arr       = [];
		for (var i    = n; i > 0; i--){
  			var num    = n - (i-1)
  			arr.push(num);				//want array to start of at 1 2 3 4 5
  		}
  		return arr;
  	})();								//just execute this function
 	newArr        = (function(){
 		var oddArr   = [];
 		for (var i   = 0; i < newArr.length; i++){
 			if (newArr[i] % 2 !== 0){
 				oddArr.push(newArr[i])
 			}
 		}
 		return oddArr;
 	})();
 	var total     = 0;
 	newArr        = (function(){
 		var total    = 0;
 		for (var i   = 0; i < newArr.length; i++){
 			if (newArr[i] === 1){
 				total ++;
 			}
 			else{
 				for (var j = 2; j < newArr[i]; j++){
 					if (newArr[i] % j === 0 ){
 						total++;
 						break;
 					}
 				}
 			}
 		}
 		return total;
 	})();
 	return newArr;
}

function removeRotten(bagOfFruits){
	if (bagOfFruits !== null && bagOfFruits !== undefined){
		var newArr        = (function(){
			var regEx        = /rotten/i;
			for (var i       = 0; i < bagOfFruits.length; i++){
				if (regEx.test(bagOfFruits[i]) === true){
					bagOfFruits[i] = bagOfFruits[i].replace(regEx,"");
				}
			}
			return bagOfFruits;
		})();
		var result        = newArr.map(function(a){
			return a.charAt(0).toLowerCase() + a.slice(1);
		});
		return result;
	}
	else {
		return [];
	}
}

function scrollingText(text){
	var wordSplit  = text.toUpperCase().split("");
	var newArr     = (function(){
		var arr       = [];
		for (var i    = 0; i < wordSplit.length; i++){
			if (i === 0){
				word        = wordSplit.join("");
				arr.push(word);
			}
			else{
				var removed = wordSplit.shift();
				wordSplit.push(removed);
				word        = wordSplit.join("");
				arr.push(word);
			}
		}
		return arr;
	})();
	return newArr;
}

// function wave(str){
// 	var letters = (function(){
// 		var newArr = str.split("");
// 		var totalLetters = 0;
// 		for (var i = 0; i < str.length; i++){
// 			if (newArr[i] !== " "){
// 				totalLetters++;
// 			}
// 		}
// 		return totalLetters;
// 	})();
// 	var data = (function(){
// 		var arr = [];
// 		for (var i = 0; i < letters; i++){
// 			arr.push(str);
// 		}
// 		return arr;
// 	})();
// var loop = 0;
// data = data.map(function(a,index){
//     if (a[index] !== " "){
//       return a.slice(0,index + loop) + a.charAt(index + loop).toUpperCase() + a.slice(index + 1 + loop);
//     }
//     else {
//       ++loop;
//       return a.slice(0,index + loop) + a.charAt(index + loop).toUpperCase() + a.slice(index + 1 + loop);
//     }
// })
// 	return data;
// }

function getMiddle(str){
	var word             = (function(){
      var result      = "";
      for (var i      = 0; i < str.length; i++){
         if (str.length % 2 === 0){
            if ((i+1) === (str.length / 2)){
               result = str.slice(i,i+2);
            }
         }
         else {
            var num   = str.length / 2;
            num       = num.toFixed() - 1 ;
            result    = str.slice(num,num + 1);
         }
      }
      return result;
  })();
  return word;
}

function highAndLow(str){
   var arr          = str.split(" ");
   var stringToNum  = (function(){
      for (var i    = 0; i < arr.length; i++){
         arr[i]     = parseInt(arr[i],10);
      }
      return arr;
   })();                                        // turns string of numbers into an array of numbers
   var numString    = (function(){
      var highest   = arr[0];
      for (var i    = 1; i < arr.length; i++){
         if (arr[i] > highest){
            highest = arr[i];
         }
      }
      var lowest    = highest;
      for (var i    = 0; i < arr.length; i++){
         if (arr[i] < lowest){
            lowest  = arr[i];
         }
      }
      return highest + " " + lowest;
   })();
   return numString;
}

function descendingOrder(n){
   var string      = n.toString();
   var arr         = string.split("");
   var stringToNum = (function(){
      for (var i   = 0; i < arr.length; i++){
         arr[i]    = parseInt(arr[i],10);
      }
      return arr;
   })();
   var order       = (function(){
      return stringToNum.sort().reverse();
   })();
   var result      = (function () {
      order        = order.join("");
      return parseInt(order,10);
   })();
   return result;
}

function findOdd(arr) {
   var unique    = arr.filter((value,index,array)=>array.indexOf(value)=== index);      //make an array of all unique values that are in array
   var found     = unique.find(function(element,index,array){
      var result = arr.filter(value => value === element).length;
      if (result % 2 !== 0){
         return result;
      }
   });
   return found;
}

function persistence(num) {
   var value = num;
   var loop = 0;
   while (value.toString().length > 1){
      var numToString = value.toString();                      //turn number to string so i can split at each character
      var arr = numToString.split("");                         //turn string into array split at each character
      var numArr = arr.map(function (value,index,arr) {        // turn each character back to number
            return parseInt(value,10);
      });
      value = (function(){
         var result = numArr[0];
         for (var i = 1; i < numArr.length ; i++){
            result = result * numArr[i];
         }
         return result;
      })();
      loop++;
   }
   return loop;
}

function solution(number){
   var multiplesOfThree = [];                                        //store multiples of three here
   var multiplesOfFive  = [];                                        //store multiples of five here
   var arrOfThree       = (function () {                             //a loop going up by one that stores multiples of 3 into empty array (multiplesOfThree)
      for (var i        = 1; i < number; i++){
         if (i % 3 === 0){
            multiplesOfThree.push(i);
         }
      }
      return multiplesOfThree;
   })();
   var arrOfFive        = (function(){                               //an array of multiplesOfFive
      for (var i        = 1; i < number; i++){
         if (i % 5 === 0){
            multiplesOfFive.push(i);
         }
      }
      return multiplesOfFive;
   })();
   return (function(){                                               //variable to store all numbers here and use reduce to make one value(also return this funciton)
      var newArr        = arrOfThree.concat(arrOfFive);              //combine both arrays using concat()
      newArr            = newArr.filter((value,index,array) => newArr.indexOf(value) === index);       //cut out all copycats using filter and indexOf method
      return newArr.reduce((total,value) => total + value,0);          //add all values together using reduce method
   })();
}

function solutionv2(number) {
   var sum = 0;
   for (var i = 1; i < number;i++){
      if (i % 3 == 0 || i % 5 == 0){
         sum  += i;
      }
   }
   return sum;
}

function findOutlier(arr){
   var testArr = arr.filter(num => num % 2 == 0);       //return an array with just even numbers
   if (testArr.length > 1){
      return arr.find(function (element) {              //return element that is odd using find method
         return element % 2 != 0;
      });
   }
   if (testArr.length == 1){                            //return element that is even
      return arr.find(function(element){
         return element % 2 == 0;
      });
   }
}
