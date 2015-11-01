var input = ["Josh", "Joey", "Muscle Creek", "Beefcakes", "Homoeroticism", "Joyfulness"];

// find the most common letter

var seen = {};
var currentHighest = 0;

for (var i = 0; i<input.length; i++) {

  for(var j = 0; j<input[i].length; j++) {
    if(seen[input[i][j]]) {
      seen[(input[i][j])] += 1;
    } else {
      seen[(input[i][j])] = 1;
    }

    if(seen[(input[i][j])] > currentHighest) {
      currentHighest = seen[(input[i][j])];
      highestLetter = input[i][j];
      console.log("The most common letter is " + highestLetter + " with a total of " + currentHighest);
    }
  
  }

} 

console.log(seen);
