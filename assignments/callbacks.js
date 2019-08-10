// Create a higher order function and invoke the callback function to 
// test your work. You have been provided an example 
// of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 
/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//----------------------------------------

// getLength passes the length of the array into the callback.

function getLength(array, callback) {
  callback(array.length);
}
getLength(items, (length) => {
  alert(length);
});


//--------------------------------------

 // last passes the last item of the array into the callback.

function last(arr, cb) {
}
console.log(items.slice(-1)[0]); // 6


//--------------------------------------
 // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) 
{
	return cb(x+y);
  }
sumNums(5, 6, function(x)
    {
	console.log(x)
});


//--------------------------------------
 // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) 
{
  return cb(x*y);
  }
multiplyNums(9, 3, function(x)
    {
	console.log(x)
});

//--------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

	
	for (i =0; i < list.length; i++){
		if (list[i] = item){
			return cb ("yes");
		}
	}

	return cb (list);

}

contains("yo-yo", items, function isit(maybe){
	console.log(maybe);
})

//--------------------------------------

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
