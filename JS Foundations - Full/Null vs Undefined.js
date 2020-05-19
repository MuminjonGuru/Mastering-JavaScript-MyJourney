var myVar;
console.log(test)  // undefined

test = null
console.log(test)  // null

console.log(typeof null)  // object
console.log(typeof undefined)  // undefined
console.log(null === undefined)  // false
console.log(null == undefined)  // true
console.log(null === null)  // true
console.log(null == null)  // true
console.log(!null)  // true
console.log(!!null)  // false
console.log(1 + null)  // 1
console.log(1 + undefined)  // NaN
