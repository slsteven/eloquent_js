//http://eloquentjavascript.net/02_program_structure.html
//FizzBuzz problem


for (var i = 0; i < 100; i++) {
  if(i % 3 == 0 && i % 5 == 0){
    console.log("fizzbuzz");
    continue;
  }
  else if(i % 3 == 0){
    console.log("fizz");
  }
  else if(i % 5 == 0){
    console.log("buzz");
  }
  else {
    console.log(i);
  }
};

//Chessboard
function chessboard(x){

  for (var i = 1; i <= x; i++) {
    if(i % 2 == 1){
      var line = "";
    }
    else {
      var line = " ";
    }
      for (var j = 1; j <= x; j++){
        if(j % 2 == 1){
          line += " ";
        }
        if(j % 2 == 0){
          line += "#";
        }
        if(j % x == 0){
          line += "\n"
        }
      }
      console.log(line);
    }
}
chessboard(8);
