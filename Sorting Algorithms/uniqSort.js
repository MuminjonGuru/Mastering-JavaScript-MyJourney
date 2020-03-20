const uniqSort = function(arr) {
  const breadcrumbs = {};
  return arr.sort((a, b) => a - b);
}

uniqSort([4,1,6,2,0]);
