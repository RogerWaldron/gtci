const brute = require("./max-sum-subarray");
const better = require("./max-sum-subarray");

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const K = 5;
const answer = [2.2, 2.8, 2.4, 3.6, 2.8];

test("Expect Brute and Better results to be equal", () => {
  let bruteResult = brute(arr, K);
  let betterResult = better(arr, K);

  expect(bruteResult).toStrictEqual(betterResult);
});
