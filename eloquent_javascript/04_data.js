//The sum of a range
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end, step){
  if(step == undefined){
    step = 1;
  }
  var arr = [];
  if(start < end){
    for (var i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  else {
    for (var i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

function sum(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
}

console.log(sum(range(1, 10))); //55
console.log(range(5, 2, -1)); //[5, 4, 3, 2]

//Reversing an array
//For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArray(arr){
  var new_arr = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    new_arr.push(arr.pop());
  };
  return new_arr;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


function reverseArrayInPlace(arr){
  var len = arr.length;
  var temp;
  for (var i = 0; i < len/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-1 - i];
    arr[arr.length-1 - i] = temp;
  };
  return arr;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


