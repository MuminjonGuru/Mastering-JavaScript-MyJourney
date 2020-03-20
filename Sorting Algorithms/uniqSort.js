const uniqSort0 = function(arr) {
  const breadcrumbs = {};
  return arr.sort((a, b) => a - b);
}

// Linear version
const uniqSort = function(arr) {
  const breadcrumbs = {};
  const result = [];

  for(let i=0; i < arr.length; i++) {
    if(!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
}


uniqSort([4,1,6,2,0]);
