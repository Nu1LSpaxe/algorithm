# Dynamic Programming

- [Dynamic Programming](#dynamic-programming)
  - [Fibonacci Series](#fibonacci-series)
    - [Question](#question)
    - [Hint](#hint)
    - [Complexity Analysis:](#complexity-analysis)
  - [Grid Traveler](#grid-traveler)
    - [Question](#question-1)
    - [Hint](#hint-1)
    - [Complexity Analysis](#complexity-analysis-1)
  - [Tips for using memorization in DP problems](#tips-for-using-memorization-in-dp-problems)
  - [Tabulation Recipe](#tabulation-recipe)
  - [Can Sum](#can-sum)
    - [Question](#question-2)
    - [Hint](#hint-2)
    - [Complexity Analysis](#complexity-analysis-2)
  - [How Sum](#how-sum)
    - [Question](#question-3)
    - [Hint](#hint-3)
    - [Complexity Analysis](#complexity-analysis-3)
  - [Best Sum](#best-sum)
    - [Question](#question-4)
    - [Hint](#hint-4)
    - [Complexity Analysis](#complexity-analysis-4)
  - [Summary of CAN / HOW / BEST Sum](#summary-of-can--how--best-sum)
  - [Can Construct](#can-construct)
    - [Question](#question-5)
    - [Hint](#hint-5)
    - [Complexity Analysis](#complexity-analysis-5)
  - [Count Construct](#count-construct)
    - [Question](#question-6)
    - [Hint](#hint-6)
    - [Complexity Analysis](#complexity-analysis-6)
  - [All Construct](#all-construct)
    - [Question](#question-7)
    - [Hint](#hint-7)
    - [Complexity Analysis](#complexity-analysis-7)

<br>

## Fibonacci Series

### Question

Write a function `fib(n)` that takes in a number as an argument. \
The function should return the n-th number of the Fibonacci sequence.

The 1st and 2nd number of the sequence is 1.\
To generate the next number of the sequence, we sum the previous two.

### Hint

1. Imagine it as a binary tree.
2. In tabulation.

   ```
   fib(7) = 13
   ===================================
   |index| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
   ===================================
   |value| 0 | 1 | 1 | 2 | 3 | 5 | 8 |
   ===================================
           0   0   0   0   0   0   0  --> Initialize the table with default values
           0   1   0   0   0   0   0  --> Seed the trivial answer into the table
           0 + 1 = 1                  --> i = 2
               1 + 1 = 2              --> i = 3
                   1 + 2 = 3          --> i = 4
                       2 + 3 = 5      --> i = 5
                           3 + 5 = 8  --> i = 6
   ```

Answer: [fib.js](fib.js)

### Complexity Analysis:

Without memorization:

- Time complexity:
  - height: n
  - width: 1 _ 2 _ 2 \* 2 ... = 2^(n-1)
  - so time complexity is $O(2^n)$
- Space complexity: $O(n)$

With memorization:

- Time complexity:
  - height: n
  - width: 1, 2, 2, 2, ...
  - so time complexity is $O(2n)$, which is $O(n)$ approximately
- Space complexity: $O(n)$

With tabulation:

- Time complexity: $O(n)$
- Space complexity: $O(n)$

<br>

## Grid Traveler

### Question

Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m \* n?\
Write a function `gridTraveler(m, n)` taht calculates this.

### Hint

Similar to Fibonacci series, for example, (m, n) = (2, 3), it looks like:

```
=========================
| (2,3) | (2,2) | (2,1) |
=========================
| (1,3) | (1,2) | (1,1) |
=========================
```

If one of arguments has turned to "0", i.e. (0, N) or (N, 0), that means the route has in to the end; otherwise, keep going until two arguments are (1,1), we marked as (FIND).

1. Imagine it as a bianry tree.

   ```
   gridTraveler(2,3) = 3(FIND)

   (2,3) -> go right -> (2,2) -> go right -> (2,1) -> go right -> (2,0)
                                                   -> go down  -> (1,1)(FIND)
                             -> go down  -> (1,2) -> go right -> (1,1)(FIND)
                                                   -> go down  -> (0,2)
         -> go down  -> (1,3) -> go right -> (1,2) -> go right -> (1,1)(FIND)
                                                   -> go down  -> (0,2)
                             -> go down  -> (0,3)
   ```

2. In tabulation.

   ```
   go right: copy value from left; go down: copy value from top.
   note: we already know that (1,1) must be 1(step), in other words, seed the trivial answer into the table.
       0   1   2   3
     =================
   0 | 0 | 0 | 0 | 0 |
     =================
   1 | 0 | 1 | 1 | 1 |
     =================
   2 | 0 | 1 | 2 | 3 |
     =================
   3 | 0 | 1 | 3 | 6 |
     =================

   ```

Answer: [grid-traveler.js](grid-traveler.js)

### Complexity Analysis

Without memorization:

- Time complexity: \
  In order to reach (1,1), we first spend n and m steps to get there, so it will be n+m levels(depth), implies the time complexity is $O(2^{(n+m)})$
- Space complexity: $O(n+m)$

With memorization:\
for example, n: {0, 1, 2}, m: {0, 1, 2, 3}, it will be n \* m times.

- Time complexity: $O(n*m)$
- Space complexity: $O(n+m)$

With tabulation:

- Time complexity: $O(n*m)$
- Space complexity: $O(n*m)$

<br>

## Tips for using memorization in DP problems

1. Make it work.

- Visualize the problem as a tree
- Implement the tree using recursion
- Test it

2. Make it efficient.

- Add a memo object
- Add a base case to return memo values
- Store return values into the memo

<br>

## Tabulation Recipe

- Visualize the problem as table
- Size the table based on the inputs
- Initialize the table with default values
- Seed the trivial answer into the table
- Iterate through the table
- Fill futher positions based on the current position

<br>

## Can Sum

### Question

Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.\
You may assume that all input numbers are nonnegative.

### Hint

1. Again, we can try to imagine this as a tree (not binary tree).

   ```
   canSum(7, [5, 3, 4, 7]) -> true

   7 - (5) > 2(False)
     - (3) > 4 - (3) > 1(False)
               - (4) > 0(True)
     - (4) > 3 - (3) > 0(True)
     - (7) > 0(True)
   ```

If one case be TRUE, return true.

2. In tabulation

   ```
   canSum(7, [5, 3, 4])

     0   1   2   3   4   5   6   7
   =================================
   | T | F | F | F | F | F | F | F |   --> Seed the trivial answer into table
   ==================================
     T   F   F   T   T   T   F   F     --> Iterate through the table (LOOP 1), 0 = T, n = [5, 3, 4]
                                                                     (LOOP 2/3), 1 = F, 2 = F (no change)
     T   F   F   T   T   T   T   T                                   (LOOP 4), 3 = T, n = 5(+3) over index, n = 3(+3) = 6 = T, n = 4(+3) = 7 = T.

   ```

Answer: [can-sum.js](can-sum.js)

### Complexity Analysis

Without memorization (Brute Force):

- Time complexity:\
  In the worst case (in other word, assuming m is targetSum and every element in array with n lengh is 1):
  - so the depth of tree is m
  - pass n times (loop array wiht length n) in each level (recursion)
  - the time complexity is going to be $O(n^m)$
- Space complexity:\
  The space complexity is tree's height, which is $O(m)$

With memorization:

- Time complexity: $O(n*m)$, same concept with [Grid Traveler](#complexity-analysis-1)
- Space complexity: $O(m)$

With tabulation:

- Time complexity: $O(m*n)$
- Space complexity: $O(m)$

<br>

## How Sum

### Question

Write a function `howSum(targetSum, numbers)` taht takes in a targetSum and an array of number as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinaitons possible, you may return any single one.

### Hint

1. Similar to [Can Sum](#can-sum), use binary tree.

   ```
   howSum(7, [5, 3, 4, 7]) -> return [3, 4] or [4, 3] or [7]

   7 - (5) > 2 (return null)
     - (3) > 4 - (3) > 1 (return null)
               - (4) > 0 (have passed nodes: [3, 4])
     - (4) > 3 - (3) > 0 (have passed nodes: [4, 3])
     - (7) > 0 (have passed nodes: [7])
   ```

2. In tabulation

   ```
   howSum(7, [5, 3, 4])

     0      1      2      3      4      5      6      7
   =========================================================
   | null | null | null | null | null | null | null | null |  --> Initialize the table with default values
   =========================================================
     []    null   null   null   null   null   null   null   --> Seed the trivial answer into table
     []    null   null   [3]    [4]    [5]    null   null   --> LOOP 1, n = [5, 3, 4]
     []    null   null   [3]    [4]    [5]   [3,3]  [3,4]   --> LOOP 3/4, index=pre_index+n => 6 = [3](+3) = [3,3], 7 = [3](+4) = [4](+3) = [3,4]

   ```

Answer: [how-sum.js](how-sum.js)

### Complexity Analysis

Without memorization:

- Time complexity:
  - In the worst case is depth of tree (m), each level loop n times.
  - Moreover, in this case, since we have to copy array(in return), which takes m times.
  - In summary, the time complexity is $O(n^m*m)$
- Space complexity: $O(m)$

With memorization:

- Time complexity: $O(n*m*m)  = O(n*m^2)$
- Space complexity\
  Return with a memorizaiton, because of the worst case might has m elements in memorization, so the space complexity would be $O(m*m) = O(m^2)$

With tabulation:

- Time complexity: $O(m*m*n)$
- Space complexity: $O(m*m)$

<br>

## Best Sum

### Question

Write a function `bestSum(targetSum, numbers)` taht takes in a targetSum and an array of numbers as arguments.

The function should return an array containing the **shortest** combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

### Hint

1. Create a `shortestPath` to record the combination.

   ```
   bestSum(8, [2, 3, 5]) -> return either [3, 5] or [5, 3]

   8 - (2) > 6 - (2) > 4 - (2) > 2 - (2) > 0
                         - (3) > 1
               - (3) > 3 - (2) > 1
                         - (3) > 0
               - (5) > 1
     - (3) > 5 - (2) > 3 > (2) > 1
                         > (3) > 0
               - (3) > 2 > (2) > 0
               - (5) > 0
     - (5) > 3 - (2) > 1
               - (3) > 0
   ```

2. In tabulation

   ```
   bestSum(8, [2, 3, 5]) -> [3, 5]

     0      1      2      3      4      5      6      7      8
   ================================================================
   | null | null | null | null | null | null | null | null | null | --> Initialize the table with default values
   ================================================================
     []    null   null   null   null   null   null   null   null   --> Seed the trivial answer into table
     []    null   [2]    [3]    [2,2]  [5]    [3,3]  [2,5]  [3,5]  --> After LOOP (in the progress, array won't be replaced if new array.length is larger)

   ```

Answer: [best-sum.js](best-sum.js)

### Complexity Analysis

Without memorization (Brute Force):

- Time complexity: $O(n^m*m)$
- Space complexity:
  - In worst case, shortestPath is m length
  - space complexity: $O(m*m) = O(m^2)$

With memorization:

- Time complexity:
  - tree depth: m
  - each level (recursion) loop elemnets: n
  - copy an array: m
  - so it takes $O(n*m^2)$
- Space complexity:
  - each key in memo has elemnets: m
  - length of memo: m
  - $O(m^2)$

With tabulation:

- Time complexity: $O(m^2*n)$
- Space complexity: $O(m^2)$

<br>

## Summary of CAN / HOW / BEST Sum

Did you notice this topic title? I used UPPERCASE here.

**CAN/HOW/BEST** problems can be interpreted as :

- CAN Sum : "Can you do it? yes/no" $\implies$ **Decision Problem**
- HOW Sum : "How will you do it?" $\implies$ **Combinatoric Problem**
- BEST Sum : "What is the 'best' way to do it?" $\implies$ **Optimization Problem**

<br>

## Can Construct

### Question

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

### Hint

1. Use **prefix** to check.

   ```
   canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) -> true

   'abcdef' - ('ab'  ) > 'cdef' - ('cd' ) > 'ef'(FALSE)
           - ('abc' ) > 'def'  - ('def') > '' (TRUE)
           - ('abcd') > 'ef'(FALSE)


   canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) -> false

   'skateboard' - ('ska') > 'teboard'  - ('t'  ) > 'eboard'(FALSE)
               - ('sk' ) > 'ateboard' - ('ate') > 'board' - ('bo'  ) > 'ard'(FALSE)
                                                           - ('boar') > 'd'(FALSE)
   ```

2. In tabulation

   ```
   canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) -> true

     0   1   2   3   4   5   6
   =============================
   | T | F | F | F | F | F | F |  --> Seed the trivial answer into table
   =============================
     a   b   c   d   e   f

     T   F   T   T   T   F   F    --> LOOP 1: index(n), 2('ab') = 3('abc') = 4('abcd') = T
                                 --> index 1 = F pass
     T   F   T   T   T   F   T    --> After loop
   ```

Answer: [can-construct.js](can-construct.js)

### Complexity Analysis

Without memorization (Brute Force):

- Time complexity:
  - target.length: m
  - wordBank.length: n
  - target.slice(): m
  - $O(n^m*m)$
- Space complexity:
  - depth of tree (target.length): m
  - suffix: m
  - $O(m^2)$

With memorization:

- Time complexity: $O(n*m^2)$
- Space complexity: $O(m^2)$

With tabulation:

- Time complexity: $O(n*m^2)$
- Space complexity: $O(m)$

<br>

## Count Construct

### Question

Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

### Hint

1. Binary tree

   ```
   countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) -> 1

   'abcdef' - ('ab'  ) > 'cdef' - ('cd' ) > 'ef'(0)
           - ('abc' ) > 'def'  - ('def') > '' (1)
           - ('abcd') > 'ef'(0)


   countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) -> 2

   'purple' - ('purp' ) > 'le' - ('le') > ''(1)
           - ('p'    ) > 'urple'  - ('ur') > 'ple' - ('p') > 'le' - ('le') > '' (1)
           - ('purpl') > 'e'(0)

   ```

2. In tabulation

   ```
   countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) -> 2

     0   1   2   3   4   5   6
   =============================
   | 1 | 0 | 0 | 0 | 0 | 0 | 0 |  --> Seed the trivial answer into table
   =============================
     p   u   r   p   l   e
     1   1   0   1   2   1   2    --> LOOP: index(n) => 1('p'), 3(['p', 'ur']), 4('purp', ['p', 'ur', 'p']), 6(['purp', 'le'], ['p', 'ur', 'p', 'le'])
   ```

Answer: [count-construct.js](count-construct.js)

### Complexity Analysis

Without memorization (Brute Force):

- Time complexity: $O(n^m*m)$
- Space complexity: $O(m^2)$

With memorization:

- Time complexity: $O(n*m^2)$
- Space complexity: $O(m^2)$

With tabulation:

- Time complexity: $O(n*m^2)$
- Space complexity: $O(m)$

<br>

## All Construct

### Question

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing **all of the ways** that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`.

You may reuse elements of `wordBank` as many times as needed.

### Hint

1. Binary tree with some examples

   ```
   allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']) -> [['ab', 'cd','ef'], ['ab', 'c', 'def'], ['abc', 'def'], ['abcd', 'ef']]

   allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) -> [['purp', 'le'], ['p', 'ur', 'p', 'le']]

   allConstruct('hello', ['cat', 'dog', 'mouse']) -> []

   allConstruct('', ['cat', 'dog', 'mouse']) -> [[]]
   ```

2. In tabulation
   ```
     0     1      2          3            4          5           6
   ==========================================================================
   | [   | [   | [      | [          | [           | [   | [                |
   |  [] |     | ['ab'] | ['abc']    | ['abcd']    |     | ['abc','def']    |
   |     |     |        | ['ab','c'] | ['ab','cd'] |     | ['ab','c','def'] |
   |     |     |        |            |             |     | ['abcd','ef']    |
   |     |     |        |            |             |     | ['ab','cd','ef'] |
   | ]   | ]   | ]      | ]          | ]           | ]   | ]                |
   ==========================================================================
   ```

Answer: [all-construct.js](all-construct.js)

### Complexity Analysis

With tabulation:
- Time complexity: $O(n^m)$
- Space complexity: $O(n^m)$

<!-- ### Question
### Hint
### Complexity Analysis
Without memorization (Brute Force):
- Time complexity:
- Space complexity:

With memorization:
- Time complexity:
- Space complexity: -->
