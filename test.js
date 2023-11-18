// var minPairSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);

const { error } = require("console");

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
