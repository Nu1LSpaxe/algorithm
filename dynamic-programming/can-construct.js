const canConstruct = (target, wordBank) => {
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) return true;
        }
    }
    return false;
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));    // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false


const canConstruct_memo = (target, wordBank, memo = {}) => {
    if (target === '') return true;
    if (target in memo) return memo[target];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            if (canConstruct_memo(suffix, wordBank) === true) {
                memo[target] = true;
                return memo[target];
            }
        }
    }
    memo[target] = false;
    return memo[target];
}

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'eee',
    'eeeee',
    'eeeeeee',
    'eeeeeeee',
]));    // false

const canConstruct_table = (target, wordBank) => {
    const table = new Array(target.length + 1).fill(false);
    table[0] = true;


    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    
    return table[target.length];
}

console.log(canConstruct_table('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'eee',
    'eeeee',
    'eeeeeee',
    'eeeeeeee',
]));    // false