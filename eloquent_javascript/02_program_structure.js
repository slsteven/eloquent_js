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

 var size = 8;

var board = "";

  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }
  console.log(board);
}
chessboard(8);
