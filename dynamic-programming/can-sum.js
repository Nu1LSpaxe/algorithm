const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        let remainSum = targetSum - num;
        if (canSum(remainSum, numbers) === true) {
            return true;
        }
    }
    return false;
};

console.log(canSum(7, [5, 3, 4, 7])); // true

const canSum_memo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        let remainSum = targetSum - num;
        if (canSum_memo(remainSum, numbers, memo) === true) {
            memo[remainSum] = true;
            return memo[remainSum];
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
};

console.log(canSum_memo(300, [7, 14])); // false

const canSum_table = (targetSum, numbers) => {
    const table = new Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= table.length; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                if (i + num <= table.length) table[i + num] = true;
            }
        }
    }
    
    return table[targetSum];
}

console.log(canSum_table(300, [7, 14])); // false
