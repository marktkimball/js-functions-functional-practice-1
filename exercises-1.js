

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for(var i = 0; i < array.length; i++){
      callback(array[i]);
    }
    return total;
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sumTotal = 0;
    for (var j = 0; j < args.length; j++){
      sumTotal += args[j];
    }
    return sumTotal;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var totalForAvg = 0;
    for (var k = 0; k < args.length; k++){
      totalForAvg += args[k];
    }
    return totalForAvg / args.length;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var largest = 0;
    args.forEach(function(element, index, array){
      if(element > largest){
        largest = element;
      }
    })
    return largest;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var longest = "";
    args.forEach(function(element, index, array){
      if(element.length > longest.length){
        longest = element;
      }
    })
    return longest;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var nums = [10, 20, 1, 2, 3]

console.assert(nums.sort() === [1, 10, 2, 20, 3]);
console.log(nums);

// .concat()
var myString = "This is the beginning of ";
var endString = "a string.";

console.assert(myString.concat(endString) === "This is the beginning of a string.");

// .indexOf()
var myArray = [1, 2, 5, 10, 204];

console.assert(myArray.indexOf(204) === 4);

// .split()
var newString = "Here is a lovely string that will soon be split.";

console.assert(newString.split(" ") === ["Here", "is", "a", "lovely", "string", "that", "will", "soon", "be", "split."]);
console.log(newString.split(" "));

// .join()
var joinArray = ["T", "h", "i", "s", " ", "j", "o", "i", "n", "s"];

console.assert(joinArray.join("") === "This joins");

// .pop()
var popper = [1, 2, 3, 10, 100, 2];

console.assert(popper.pop() === [1, 2, 3, 10, 100]);
console.log(popper);

// .push()
var pusher = ["Words", "are", "not"];

console.assert(pusher.push("missing.") === ["Words", "are", "not", "missing."]);
console.log(pusher);

// .slice()
var sliced = [1, 2, 3, 4, 5];

console.assert(sliced.slice(0, 2) === [1, 2]);
console.log(sliced.slice(0, 2));

// .splice()
var spliced = [1, 9, 3, 4, 5];

console.assert(spliced.splice(1, 1, 2) === [1, 2, 3, 4, 5]);
console.log(spliced);

// .shift()
var shifted = ["Bill Murray", "Nick Cage", "Samuel L. Jackson", "George Lucas"];

console.assert(shifted.shift() === ["Nick Cage", "Samuel L. Jackson", "George Lucas"]);
console.log(shifted);

// .unshift()
var unshifted = [4, 5, 6, 7, 8];

console.assert(unshifted.unshift(1, 2, 3) === [1, 2, 3, 4, 5, 6, 7, 8]);
console.log(unshifted);

// .filter()
var filterer = function(x){
  return x !== 0;
};

var filtered = [0, 2, 40, 500, 0, 100, 0, 23, 0];

console.assert(filtered.filter(filterer) === [2, 40, 500, 100, 23]);
console.log(filtered.filter(filterer));

// .map()
var addTwo = function(x){
  return x + 2;
};

var toBeMapped = [1, 20, 3, 8];

console.assert(toBeMapped.map(addTwo) === [3, 22, 5, 10]);
console.log(toBeMapped.map(addTwo));
