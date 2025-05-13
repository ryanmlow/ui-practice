function minUnhappyStudents(N: number, A: number[], T: number) {
  // Step 1: Count group sizes
  const groupCount: Record<number, number> = {};
  for (const id of A) {
    groupCount[id] = (groupCount[id] || 0) + 1;
  }

  // Step 2: Extract group sizes
  const groupSizes = Object.values(groupCount);
  const numGroups = groupSizes.length;

  // Step 3: Initialize DP table
  const dp = Array.from({ length: numGroups + 1 }, () => Array(T + 1).fill(0));

  // Step 4: Fill DP table
  for (let i = 1; i <= numGroups; i++) {
    const groupSize = groupSizes[i - 1];
    for (let j = 0; j <= T; j++) {
      if (groupSize <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - groupSize] + groupSize);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // Step 5: Compute result
  const maxIncluded = dp[numGroups][T];
  return N - maxIncluded;
}
const Test = () => {
  console.log(minUnhappyStudents(7, [1, 1, 2, 2, 2, 3, 3], 4));

  return <p>Test</p>;
};
//   return

export default Test;
