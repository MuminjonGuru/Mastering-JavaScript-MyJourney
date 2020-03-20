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
