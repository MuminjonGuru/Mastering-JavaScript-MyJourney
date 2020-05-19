// == abstract equality
// === strict equality

console.log(1 == "1");     // true
console.log(1 === "1");    // false

console.log(true == '1');  // true
console.log(true === '1'); // false

console.log("This is a string." == new String("This is a string."));   // true
console.log("This is a string." === new String("This is a string."));  // false
