const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let childPath = allConstruct(suffix, wordBank);
            let presentPath = childPath.map(val => [word, ...val]);
            result.push(...presentPath);
        }
    }
    return result;
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));

const allConstruct_memo = (target, wordBank, memo = {}) => {
    if (target === '') return [[]];
    if (target in memo) return memo[target];

    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let childPath = allConstruct_memo(suffix, wordBank, memo);
            let presentPath = childPath.map(val => [word, ...val]);
            result.push(...presentPath);
        }
    }
    memo[target] = result;
    return result;
}

console.log(allConstruct_memo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf', ['a', 'aaaaaaa', 'aaa', 'aaaaa', 'aaaa']));

const allConstruct_table = (target, wordBank) => {
    const table = new Array(target.length + 1).fill().map(() => []);    // create a '2D' array -> first fill(), then map() each assign an array.
    // If use Array.fill([]) here, then it will be a '1D' array and fill all elements with []. For example:
    // arr = new Array(3).fill([]); arr.push(3);  => arr = [[3], [3], [3]]
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                let passPath = table[i].map(path => [...path, word]);
                table[i + word.length].push(...passPath);
            }
        }
    }

    return table[target.length];
}

console.log(allConstruct_table('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
