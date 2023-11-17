var minPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  console.log(nums);
  let firstMarker = 0;
  let lastMarker = nums.length - 1;
  let sum = 0;

  while (firstMarker < lastMarker) {
    let sumIn = 0;
    sumIn += nums[firstMarker];
    sumIn += nums[lastMarker];

    if (sumIn > sum) {
      sum = sumIn;
    }

    firstMarker += 1;
    lastMarker -= 1;
  }

  console.log(sum);
  return sum;
};

minPairSum([9, 2, 10, 1, 10, 4, 8, 9, 7, 6, 8, 10, 8, 6, 5, 4, 3, 4, 2, 10]);
