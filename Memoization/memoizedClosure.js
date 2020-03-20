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


const memoizedClosure = () => {
  let cache = {};
	return (n) => {
		if (n in cache) {
			console.log('Getting from cache:', n);
			return cache[n];
		}
		else {
			console.log('Computing result');
			let result = times10(n);
			cache[n] = result;
			return result;
		}
	};
};

const memoClosureTimes10 = memoizedClosure();
console.log(memoClosureTimes10(9));	// calculated
console.log(memoClosureTimes10(10));	// cached

// Generic Memoize Function
const memoize = (cb) => {
  let cache = {};
	return (n, ...args) => { //[9]
		if (n in cache) {
			console.log('Getting from cache:', n);
			return cache[n];
		}
		else {
			console.log('Computing result');
			let result = cb(n, ...args); // cb(9)
			cache[n] = result;
			return result;
		}
	};
};
