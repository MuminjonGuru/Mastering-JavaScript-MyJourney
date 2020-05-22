"use strict"

function myFunction() {
  "use strict";
  var y = 3.141592;
}

// converting 

var x = 3.14;
delete x;

var obj = {};
Object.defineProperty(obj, "x", {value: 0, writable: false});
obj.x = 3.14;

delete Object.prototype;

function sum(a, a, c) {
  'use strict';
  return a + b + c;
}

// with and eval
var x= 17;
with(obj) {
  x;
}

eval("var x;")

var x = 17;
var evalX = eval("'use scrict'; var x = 42; x;");
console.assert(x == 17);
console.assert(evalX === 42);
