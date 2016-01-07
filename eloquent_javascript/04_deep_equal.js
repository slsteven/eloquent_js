function deepEqual(obj1, obj2){
  if(obj1 === obj2){
    return true;
  }
  if(obj1 == null || obj2 == null){
    return false;
  }
  if(typeof obj1 == "object" && obj2 == null){
    return false;
  }
  if(typeof obj2 == "object" && obj1 == null){
    return false;
  }
  var count1 = 0;
  for(var prop in obj1){
    count1++;
  }

  var count2 = 0;
  for(var prop in obj1){
    count2++;
    if((typeof obj1[prop] == "object" && typeof obj2[prop] == "object") ||
      (obj1[prop] == obj2[prop])){
        deepEqual(obj1[prop], obj2[prop]);
    }
    else{
      if(obj1[prop] !== obj2[prop]){
        return false;
      }
    }
  }
  if(count1 !== count2){
    return false;
  }
return true;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
