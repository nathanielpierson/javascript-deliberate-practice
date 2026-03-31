// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var band = ["hello", "goodbye", "punchline", "tigers jaw"];
var z = [];

for (var i=0; i < band.length; i++) {
  z.push(band[i].toUpperCase());
}

console.log(z);