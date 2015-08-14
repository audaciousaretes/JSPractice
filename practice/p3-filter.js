
function filter (array, callback){
    // YOUR CODE HERE
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function (v) {
    return v%2 === 0
});

console.assert(evens[0] === 2);
console.assert(evens[1] === 4);
