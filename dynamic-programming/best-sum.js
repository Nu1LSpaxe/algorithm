const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestPath = null;
  for (let num of numbers) {
    let remainSum = targetSum - num;
    let conbination = bestSum(remainSum, numbers);
    if (conbination !== null) {
      // update shortestPath if combination.length shorter than it
      if (shortestPath === null || conbination.length < shortestPath.length) {
        shortestPath = [num, ...conbination];
      }
    }
  }
  return shortestPath;
};

console.log(bestSum(8, [2, 3, 5])); // [5, 3]

const bestSum_memo = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  let shortestPath = null;
  for (let num of numbers) {
    let remainSum = targetSum - num;
    let conbination = bestSum_memo(remainSum, numbers, memo);
    if (conbination !== null) {
      // update shortestPath if combination.length shorter than it
      if (shortestPath === null || conbination.length < shortestPath.length) {
        shortestPath = [num, ...conbination];
      }
    }
  }
  memo[targetSum] = shortestPath;
  return shortestPath;
};

console.log(bestSum_memo(100, [1, 2, 5, 25]));  // [ 25, 25, 25, 25 ]


const bestSum_table = (targetSum, numbers) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] != null) {
      for (let num of numbers) {
        let currPath = [num, ...table[i]];
        if (table[i + num] == null || table[i + num].length > currPath.length) table[i + num] = currPath;
      }
    }
  }
  
  return table[targetSum];
}

console.log(bestSum_table(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
