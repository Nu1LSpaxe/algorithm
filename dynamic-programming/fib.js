const fib = (n) => {
    return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

console.log(fib(6));    // 8
console.log(fib(2));    // 1

const fib_memo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    return memo[n];
}

console.log(fib_memo(50)); // 12586269025


const fib_table = (n) => {
    const table = new Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 1; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    
    return table[n];
}

console.log(fib_table(50)); // 12586269025