//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach (array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// tests
// ---
var total = 1;
forEach([1, 2, 3, 4], function (a) {
    total *= a;
});

console.assert(total === 24);
