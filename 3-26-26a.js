// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

const x = [5, 10, 8, 3];
var y = 0;
for (var i = 0; i < x.length; i++) {
y += x[i];
}
console.log(y);