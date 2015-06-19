Follow these steps:
1. paraphrase
2. ask questions
3. draw examples
4. code it
5. trace your code (with your examples)
6. discuss complexity

// 'use strict' prevents accidental global variables

// Why put your code inside a function block?

// Then you get a private namespace.

// Closure example - 

for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
// As expected, the above code will log 5 values to the console, one every 1,000 milliseconds 
// (i.e., one every second). However, it will not display the values 0, 1, 2, 3, and 4 as might 
// be expected; rather, it will display 5, 5, 5, 5, and 5.

// nest inside a function to fix -

var createFunction = function(i) {
  return function() { console.log(i); };
};
for (var i = 0; i < 5; i++) {
  setTimeout(createFunction(i), i * 1000 );
}

// What will those code output to the console ?

console.log( ( function f(n) {
  return ( (n > 1) ? n * f (n - 1) : n )
}) (10) );

// (10 > 1) ? 10 * f (10 - 1) : 10
// if n is greater than one, multiply n by f(n - 1)
// if n is one or less, return n 


// Coercion shit -

console.log(1 + "2" + "2") // 122
console.log(1 + +"2" + "2") // 32
console.log(1 + -"1" + "2") // 02
console.log(+"1" + "1" + "2"); // 112
console.log("A" - "B" + "2"); // NaN2
console.log("A" - "B" + 2); // NaN

//

var arr1 = "john".split(''); // ["j", "o", "h", "n"]
var arr2 = arr1.reverse(); // ["n", "h", "o", "j"] // reverse is a ref to the original array, so it is now reversed too.
var arr3 = "jones".split(''); // ["j", "o", "n", "e", "s"]
arr2.push(arr3); // ["n", "h", "o", "j", ["j", "o", "n", "e", "s"] ] // the whole array of arr 3 is now arr2[4];
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // 4, n
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // 9, s

//

console.log("0 || 1 = "+(0 || 1)); // 1 // 0 is falsy so it short circuits at x term and returns 1
console.log("1 || 2 = "+(1 || 2)); // 1 // 1 is truthy so it never reaches y term
console.log("0 && 1 = "+(0 && 1)); // 0 // 0 is falsy so short circuits at x term
console.log("1 && 2 = "+(1 && 2)); // 2 // both values are true so y term is returned

// Check if something is an object, while allowing for the fact that 'null' can be an object in JS.

var bar = {};
console.log((bar !== null) && (typeof bar === "object"))

// NaN (not a number) is actually a number data type.

// Find out if a number is an integer

var isInteger = function(x) {
  var numberString = x.toString();
  for(var i = 0; i < numberString.length; i++) {
    if (numberString[i] == '.') {
      return false
    }
  }

  if(typeof x == "number") {
    return true
  } else {
    console.log('uh, not even a number');
  }
}

// Alt -

function isInteger(x) { return Math.round(x) === x; } // also could use Math.floor()

// Scoping questions - How will this evaluate?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// a is not defined because it's within the function scope
// b manages to become global by not having a 'var'

so its "a defined? false"
       "b defined? true"

//frequency - figure out the most common first letter

var wordArray = ["Johnny", "Grisham", "Postal", "Trans", "Gost", "Grap"];

var letterObject = {};
var currentHighest = 0;
var highestLetter;

var frequency = function(array) {
  for(var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i].split("");
    if(!letterObject[word[0]]) {
      letterObject[word[0]] = 0;
    }
    letterObject[word[0]] += 1;
    if(letterObject[word[0]] > currentHighest) {
      currentHighest = letterObject[word[0]];
      highestLetter = word[0];
    }
  }
  var highest = ("The most frequent letter is " + highestLetter + " with " + currentHighest);
  return highest;
}

//frequency - figure out the most common letter

var wordArray = ["Johnny", "Grisham", "Postal", "Trans", "Gost", "Grap"];

var letterObject = {};
var currentHighest = 0;

var frequency = function(array) {
  for(var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i].split("");
    for(var j = 0; j < word.length; j++) {
      
      if(!letterObject[word[j]]) {
      letterObject[word[j].toLowerCase()] = 0;
      }
      letterObject[word[j].toLowerCase()] += 1;
      
      if(letterObject[word[j].toLowerCase()] > currentHighest) {
      currentHighest = letterObject[word[j].toLowerCase()];
      }
    }
  }
  return currentHighest;
}

//check for dupes, the long way - 
function checkForDupe(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]){
        return true
      } 
    }
  }
  return false;
}

//check for dupes with dictionary and return boolean, does not give specific dupes
var seen = {}; // can be inside function
function checkforDupe_wDictionary(array) {
  var current;
  for(var i = 0; i < array.length; i++) {
    current = array[i];
    if (seen[current]) {
      return true
    }
    seen[current] = true
  }
  return false;
}

//reversing an array using an array that we're pretending is a stack
function reverseArray(array) {
  
  var stack = [];

  for(var i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }

  var j = 0;

  while(stack.length) {
    array[j] = stack.pop();
    j++;
  }

  return array;
}

//palindrome

var palindromeCheck = function(word) {

  var letters = word.split("");

  var reversed = "";
  
  for(var i = letters.length - 1; i > -1; i--) {
    reversed += letters[i];
  }

  if(word === reversed) {
    return true
  } else {
    return false
  }
}

// What will be the output when the following code is executed? Explain.

console.log(false == '0')
console.log(false === '0')

// false is double equal to zero because zero is falsy, but not the same data type as false, which is a boolean

// false is not triple equal to zero because they are different data types

// so the answer is

// true
// false

//create a sum function so both of the following equal 5

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

//reversing an array using the Stack constructor/prototype
function reverseArrayUsingStack(array) {

  var stack = new Stack();

  for(var i = 0; i < array.length; i++ {
    stack.push(array[i]);
  }

  while(stack.peek()) {
    array[j++] = stack.pop(); // another way of writing line 22-23
  }

  return array; // if you forget this, you wasted your time
}

//iterate through a linked list and then add a 4th ("D") node at the end
var current = head;
while (current && current.next)

//return a copy of an array with its duplicates removed

uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
}) // from stackoverflow

// a Stack is "LIFO" (last in first out): only the top element can be accessed, which is the most recent.

// Binary Search Tree has items less than node's key value stored to left 'subtree', items greater than on the right.



// Implement shift without helper methods -
// remove and return FIRST element
var inputArray = [1,2,3,4,5,6];

var shifter = function(array) {
  inputArray = [];
  for(var i = 1; i < array.length; i++) {
    inputArray.push(array[i]);
  }
  return array[0];
};

// Implement pop without helper methods - 
var inputArray = [1,2,3,4,5,6];

var popper = function(array) {
  inputArray = [];
  for(var i = 0; i < (array.length - 1); i++) {
    inputArray.push(array[i]);
  }
  return array[array.length - 1]
};

// Implement unshift without helper methods - 

var unshifter = function(array, item) {
  for(var i = array.length - 1; i > -1; i--) { // mel's solution was wrong
    array[i+1] = array[i]
  }
  array[0] = item;
  return array;
};

// Function to check whether an object is inheriting a given property - 

var willInherit = function(object, property) {
  if(object[property] && !object.hasOwnProperty(property)) {
    return true
  } else {
    return false
  }
} // shortens to -

var willInherit = function(object, property) {
  return !!(object[property] && !object.hasOwnProperty(property));
} 