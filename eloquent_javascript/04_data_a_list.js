//write a function arraytoList
//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

function arrayToList(arr){
  var list = null
  for (var i = arr.length -1 ; i >= 0; i--) {
     list = {value: arr[i], rest: list}
  };
  return list;
}
//arrayToList([10, 20]);


function listToArray(list){
  console.log(list);
  var arr = [];
  for(var node = list; node; node = node.rest){
    console.log("NODE", node);
    if(node !== null){
      arr.push(node.value)
    }
  }
  return arr;
}

//listToArray(arrayToList([10, 20, 30]));


function prepend(num, list){
  console.log(list);
  return {value: num, rest: list}

}

//prepend(10, prepend(20, null));

function nth(list, num){
  var node = list;
  var count = 0;
  while(node !== null){
    if(count == num){
      return node.value;
    }
    count++;
    node = node.rest;
  }

}

//console.log(nth(arrayToList([10, 20, 30]), 1));
