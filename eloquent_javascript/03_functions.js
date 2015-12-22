//Write a function min that takes two arguments and returns their minimum.
function min(num1, num2){
  if(num1 < num2){
    return num1;
  }
  else return num2;
}

console.log(min(0, 10));
console.log(min(0, -10));

//Recursion
function isEven(num){
  if(num === 0){
    return true;
  }
  else if(num == 1){
    return false;
  }
  else if(num < 0){
    return false;
  }
  else{
    return isEven(num - 2);
  }
}
console.log(isEven(50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1));

//Bean Counting
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

function countBs(str){
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if(str.charAt(i) == "B"){
      count += 1;
    }
  }
  return count;
}

console.log(countBs("BBC"));

function countChar(str, letter){
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if(str.charAt(i) == letter){
      count += 1;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));
