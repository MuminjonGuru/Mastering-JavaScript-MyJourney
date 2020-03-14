// insertion sort
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
