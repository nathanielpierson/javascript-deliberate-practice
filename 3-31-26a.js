// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var x = [1, 22, 67];
var y = [];
for (var i = 0; i < x.length; i++) {
y.push(x[i]*3);
}

console.log(y);