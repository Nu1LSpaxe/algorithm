const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(0, 5)) // 0

const gridTraveler_memo = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler_memo(m - 1, n, memo) + gridTraveler_memo(m, n - 1, memo);
    return memo[key];
}

console.log(gridTraveler_memo(18, 18));    // 2333606220

const gridTraveler_table = (m, n) => {
    const table = new Array(m + 1).fill(Array(n + 1).fill(0));
                               // .fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            let current = table[i][j];
            if (i + 1 <= m) table[i + 1][j] += current;
            if (j + 1 <= n) table[i][j + 1] += current;
        }
    }
    
    return table[m][n];
}

console.log(gridTraveler_table(18, 18));    // 2333606220
