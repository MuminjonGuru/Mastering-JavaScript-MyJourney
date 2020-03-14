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
