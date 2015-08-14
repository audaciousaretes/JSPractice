
// ----------------------------
// write your own map()
// that takes an array and a function
// ----------------------------

function map (array, callback){
    // YOUR CODE HERE
}

// tests
// ---
var squares = map([1, 2, 3, 4], function (v) {
    return v*v
});

console.assert(squares[0] === 1);
console.assert(squares[1] === 4);
console.assert(squares[2] === 9);
console.assert(squares[3] === 16);
