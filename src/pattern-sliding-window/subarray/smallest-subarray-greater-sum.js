/*
Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
*/

const brute = (arr, S) => {
  let minLength = Number.POSITIVE_INFINITY;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
};

const better = (arr, S) => {};

(module.exports = brute), better;
