// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

const x = [{name: "soccer ball", price: 100}, {name: "basketball ball", price: 77}, {name: "baseball bat", price: 220}];
var y = 0;
for (var i = 0; i < x.length; i++) {
  y += x[i]["price"];
}
console.log(y);