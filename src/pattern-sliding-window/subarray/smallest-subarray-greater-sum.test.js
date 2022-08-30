const brute = require("./smallest-subarray-greater-sum");
const better = require("./smallest-subarray-greater-sum");

test("Example 1 - Expect Brute and Better to return 2", () => {
  const arr = [2, 1, 5, 2, 3, 2];
  const S = 7;
  const result = [5, 2];
  const answer = 2;

  let bruteResult = brute(arr, S);
  let betterResult = better(arr, S);

  expect(bruteResult).toEqual(answer);
  // expect(bruteResult).toStrictEqual(betterResult);
});

test("Example 2 - Expect Brute and Better to return 1", () => {
  const arr = [2, 1, 5, 2, 8];
  const S = 7;
  const result = [8];
  const answer = 1;

  let bruteResult = brute(arr, S);
  let betterResult = better(arr, S);

  expect(bruteResult).toEqual(answer);
  // expect(bruteResult).toStrictEqual(betterResult);
});

test("Example 3 - Expect Brute and Better to return 3", () => {
  const arr = [3, 4, 1, 1, 6];
  const S = 8;
  const result = [3, 4, 1] || [1, 1, 6];
  const answer = 3;

  let bruteResult = brute(arr, S);
  let betterResult = better(arr, S);

  expect(bruteResult).toEqual(answer);
  // expect(bruteResult).toStrictEqual(betterResult);
});
