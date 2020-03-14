// Merge Sort - O(n log n) complexity
// because we have to compare everything once. but we don't have to compare everything to everything like we do with bubble sort.
const mergeSort = nums => {
  if(nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
};


// quick sort - O(n log n)
// takes up less memory than mergesort so it is often favored.
const quickSort = nums => {
  if(nums.length <= 1) return nums;

  const pivot = nums[nums.length-1];
  const left = [];
  const right = [];

  for(let i=0; i < nums.length - 1; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};


// insertion sort = O n squared
// if it is sorted it can be O(n)
var insertionSort = nums => {
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < 1; j++) {
      
      console.log(nums);
      
      if(nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
      
    }
  }
};



// don't use bubble sort

const bubbleSort = (nums) => {
  let swapped = false;
  do {
    for(let i=0, l = nums.length; i<l; i++) {
      if(nums[i] > nums[i+1]) {
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  }while(swapped);

  return nums;
};
