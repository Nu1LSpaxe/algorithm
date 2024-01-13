const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        let remainSum = targetSum - num;
        let conbination = howSum(remainSum, numbers);
        if (conbination !== null) {
            return [num, ...conbination];
        }
    }
    return null;
};

console.log(howSum(7, [5, 3, 4, 7])); // [3, 4]
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(7, [2, 4])); // null

const howSum_memo = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    for (let num of numbers) {
        let remainSum = targetSum - num;
        let num2 = howSum_memo(remainSum, numbers, memo);
        if (num2 !== null) {
            memo[remainSum] = num2;
            return [num, ...memo[remainSum]];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
};

console.log(howSum_memo(300, [7, 14])); // null

const howSum_table = (targetSum, numbers) => {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];
    
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] != null) {
            for (let num of numbers) {
                table[i + num] = [num, ...table[i]];
            }
        }
    }

    return table[targetSum];
}

console.log(howSum_table(300, [7, 14])); // null
