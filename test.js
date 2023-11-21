// var minPairSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);

//   console.log(nums);
//   let firstMarker = 0;
//   let lastMarker = nums.length - 1;
//   let sum = 0;

//   while (firstMarker < lastMarker) {
//     let sumIn = 0;
//     sumIn += nums[firstMarker];
//     sumIn += nums[lastMarker];

//     if (sumIn > sum) {
//       sum = sumIn;
//     }

//     firstMarker += 1;
//     lastMarker -= 1;
//   }

//   console.log(sum);
//   return sum;
// };

// minPairSum([9, 2, 10, 1, 10, 4, 8, 9, 7, 6, 8, 10, 8, 6, 5, 4, 3, 4, 2, 10]);

// async function sleep(millis) {
//   await new Promise((res) => setTimeout(res, millis));
// }

// sleep(1000);
/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// httpGet("/page-not-exists")
//   .then((response) => JSON.parse(response))
//   .then(
//     (user) => httpGet(`https://api.github.com/users/${user.name}`),
//     (rej) => console.log(rej)
//   )
//   .then((githubUser) => {
//     githubUser = JSON.parse(githubUser);

//     let img = new Image();
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.appendChild(img);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         img.remove();
//         resolve();
//       }, 3000);
//     });
//   })
//   .catch((error) => {
//     alert(error); // Error: Not Found
//   });

// async function sleep(millis) {
//   await new Promise((res) => setTimeout(res, millis));
// }

// var maxFrequency = function (nums, k) {
//   let maxFrequency = 0; // Initialize the maximum frequency
//   let currentSum = 0; // Initialize the current sum of the subarray

//   nums.sort((a, b) => a - b); // Sort the array in ascending order

//   for (let left = 0, right = 0; right < nums.length; ++right) {
//     currentSum += nums[right]; // Include the current element in the subarray sum

//     // Check if the current subarray violates the condition (sum + k < nums[right] * length)
//     while (currentSum + k < nums[right] * (right - left + 1)) {
//       currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
//       left++; // Move the left pointer to the right
//     }

//     // Update the maximum frequency based on the current subarray length
//     maxFrequency = Math.max(maxFrequency, right - left + 1);
//   }

//   return maxFrequency;
// };

// maxFrequency([1, 4, 8, 13], 5);

// var maxFrequency = function (nums, k) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (k > nums[i]) {
//       console.log("a");
//       sum++;
//     }
//   }

//   return sum;
// };

// console.log(maxFrequency([1, 2, 4], 5));
var reductionOperations = function (nums) {
  let sortArr = nums.sort((a, b) => b - a);
  const minNum = Math.min(...nums);

  let result = 0;

  let cur = 0;
  let next = 1;

  console.log(sortArr);
  while (cur < nums.length) {
    if (sortArr[next] === minNum) {
      result++;
      break;
    }

    let res = sortArr[cur] - sortArr[next];

    if (res === 0) {
      result++;
      cur++;
      next++;
    }

    if (res < minNum) {
      result += 2;
      cur++;
      next++;
    } else {
      cur++;
      next++;
    }
  }

  if (result === 1) {
    return 0;
  }

  return result;
};

console.log(reductionOperations([1, 1, 2, 2, 3]), "return");
console.log(reductionOperations([5, 1, 3]));
console.log(reductionOperations([1, 1, 1]));
