function makeFunc() {
  var name = "JS";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
//////////////////////////////////

const promise1 =  new Promise((resolve,reject) => {
  resolve("my first value");
});
const promise2 =  new Promise((resolve,reject) => {
  reject(Error("oooops error"));
});

// one of the two promises will fail, but `.all` will return only a rejection.
Promise
  .all([promise1, promise2])
  .then(data => {
    const[promise1data, promise2data] = data;
    console.log(promise1data, promise2data);
  })
  .catch(err => {
    console.log(err);
  });
  // Error: oooops error
