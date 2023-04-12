function getMaxSubSum(arr) {
  let maxSum = 0;
  let selectedNum = 0;
  arr.forEach((item) => {
    selectedNum += item;
    maxSum = Math.max(maxSum, selectedNum);
    if (selectedNum < 0) {
      selectedNum = 0;
    }
  });
  console.log(maxSum);
}
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9]);
