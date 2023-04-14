/*
 * @param {number[]} nums
 * @return {number[]}
 *
 * nums.length <= 1000
 *
 * Each index is sums with each previous nums
 *
 *
 * nums = [1, 2, 3, 4]
 * Output is = [1, 3, 6, 10]
 *             [1, 2 + 1, 3 + 2 + 1, 4 + 3 + 2 + 1]
 *
 */

const nums = [1, 2, 3, 4];

const calcArrayNums = (array) => {
  let sumBuffer = 0;
  for (let i = 0; i < nums.length; i++) {
    sumBuffer += array[i];
    array[i] = sumBuffer;
  }
  return array;
};

console.log(calcArrayNums(nums));
