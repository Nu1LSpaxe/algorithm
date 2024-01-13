const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    let numPath = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let numChildPath = countConstruct(suffix, wordBank);
            numPath += numChildPath;
        }
    }
    return numPath;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));  // 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));  // 2


const countConstruct_memo = (target, wordBank, memo = {}) => {
    if (target === '') return 1;
    if (target in memo) return memo[target];

    let numPath = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let numChildPath = countConstruct_memo(suffix, wordBank, memo);
            numPath += numChildPath;
        }
    }
    memo[target] = numPath;
    return memo[target];
}

console.log(countConstruct_memo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'eee',
    'eeeee',
    'eeeeeee',
    'eeeeeeee',
]));    // 0

const countConstruct_table = (target, wordBank) => {
    const table = new Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) == word) table[i + word.length] += table[i];
        }
    }
    
    return table[target.length];
}

console.log(countConstruct_table('purple', ['purp', 'p', 'ur', 'le', 'purpl']));  // 2
