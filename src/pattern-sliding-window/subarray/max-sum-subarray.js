// find the average of each subarray of
// ‘K’ contiguous elements in it
// input: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// output: [ 2.2, 2.8, 2.4, 3.6, 2.8 ]

// O(N^K) time and O(1) space
const brute = (arr, K) => {
  const avgResults = [];

  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    avgResults.push(sum / K);
  }
  return avgResults;
};

// O(N) time and O(1) space
const better = (arr, K) => {
  const avgResults = [];
  let windowStart = 0;
  let windowSum = 0.0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      avgResults.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return avgResults;
};

module.exports = (better, brute);
