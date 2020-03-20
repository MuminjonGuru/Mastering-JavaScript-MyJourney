const times10 = (n) => {return n * 10};
const cache = {};
const memoTimes10 = (n) => {
  if(n in cache) {
    console.log('Getting from cache: ', );
    return cache[n];
  } else {
    console.log('Calculating result');
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log(memoTimes10(5));
