# Dynamic Programming (DP)

- [Dynamic Programming (DP)](#dynamic-programming-dp)
  - [Storing solutions to subproblems in DP - Two implementations](#storing-solutions-to-subproblems-in-dp---two-implementations)
    - [Bottom-up with tabulation](#bottom-up-with-tabulation)
    - [Top-down with memoization](#top-down-with-memoization)
  - [DP and optimization problems](#dp-and-optimization-problems)
      - [**Optimization problem (最佳化問題)**](#optimization-problem-最佳化問題)
      - [Example of optimal substructure](#example-of-optimal-substructure)
    - [Summary](#summary)
  - [Dynamic programming - 4 steps](#dynamic-programming---4-steps)
  - [Sequence Alignment](#sequence-alignment)
    - [String similarity](#string-similarity)
      - [Metric 1 : Longest Common Subsequence](#metric-1--longest-common-subsequence)
    - [The Longest Common Subsequence](#the-longest-common-subsequence)
    - [Interval sheduling](#interval-sheduling)
    - [Weighted interval sheduling](#weighted-interval-sheduling)
  - [Pseudo Polynomial Runtimes](#pseudo-polynomial-runtimes)

---

Like Divide-and-Conquer (D&C), is an algorithm which solves problems by **combining the solutions to subproblems**. \
However, unlike D&C, DP makes a **time-memory tradeoff** by storing the solutions to subproblems. \
Therefore, DP is more suitable than D&C in the face of **overlapping subproblems**.

<br>

## Storing solutions to subproblems in DP - Two implementations

### Bottom-up with tabulation

- **Concept** \
   按小問題的相依順序填表格
- **Situation** \
   每個小問題都得解決的情況

### Top-down with memoization

- **Concept** \
   用遞迴解，把小問題的解答記在 memo, 方便快速查詢
- **Situation**
  - 不需要解決所有的小問題
  - 問題的相依關係不明顯

<br>

## DP and optimization problems

#### **Optimization problem (最佳化問題)**

Given an objective function, finding an optimal (minimized or maximized) solution from all feasible solutions.

- DP makes a set of (informed) **choices** to arrive at an **optimal solution**
- Each choice generates a subproblem of the same form

#### Example of optimal substructure

- The **unweighted shortest** path problem. \
  $P_{ac}$ is path between $A$ and $C$; $P_{cb}$ is path between $C$ and $B$. \
  $P_{ac} + P_{cb}$ is a shortest path between $A$ and $B \implies$ $P_{ac}$ must be a shortest path between $A$ and $C$.

- The **unweighted longest** simple path problem. \
  $P_{ac} + P_{cb}$ is a longest path between $A$ and $B$ **does not imply** that $P_{ac}$ is a longest path between $A$ and $C$.

### Summary

To apply DP, an optimization problem must exhibit two key properties :

- **Overlapping subproblems** - Solution to same subproblems are used repeatedly.
- **Optimal substructure** - An optimal solution to the problem contains within it optimal solutions to subproblems.

<br>

## Dynamic programming - 4 steps

1. **Characterize the structure** of an optimal solution
2. **Recursively define the value** of an optimal solution
3. **Compute the value** of an optimal solution
4. **Construct an optimal solution** from computed information

<br>

## Sequence Alignment

### String similarity

#### Metric 1 : Longest Common Subsequence

The longet sequence of characters that appear left-to-right (but not necessarily in a contiguous block) in both strings.

### The Longest Common Subsequence

Suppose $Z = \{z_1, z_2, \dots, z_k\}$ is an LCS of $X$ and $Y$.

1. If $x_m = y_n$, then $x_m = y_n = z_k$ and $Z_{k-1}$ is an optimal solution to $LCS(m-1, n-1)$
2. If $x_m \ne y_n$ and $z_k = x_m$, $Z$ is an optimal solution to $LCS(m-1, n)$
3. If $x_m \ne y_n$ and $z_k = y_n$, $Z$ is an optimal solution to $LCS(m, n-1)$

Thus, $c[i,j] =$

- $0 \text{ if } i = 0 \text{ or } j = 0$
- $c[i-1, j-1] + 1 \text{ if } i, j > 0 \text{ and } x_i = y_j$
- $max(c[i, j-1], c[i-1], j) \text{ if } i, j > 0 \text{ and } x_i \ne y_j$

### Interval sheduling

Given a set of job requests with start times and finish times, find the **maximum number of compatible jobs**. \
Interval scheduling can be solved using an **earliest-finish-time-first greedy** algorithm in $O(n)$ time.

### Weighted interval sheduling

Given a set of job requests with start times and finish times, find a compatible subsset of **maximum total value**.

<br>

## Pseudo Polynomial Runtimes

- Pseudo-polynomial runtimes are runtimes that are polynomial in the numeric value of the input, but exponential in the length of the input.
- $\Theta(nW)$ is **pseudo-polynomial** in the **input size**
  - where $W$ is the numeric value of the input
  - $n$ is the length of the input
  - the length of the input is $log_2W$.

[What are pseudo-polynomial run times? | Knapsack Dynamic Programming](https://youtu.be/pk1d3VNmyPI?si=zkqUd6dq2I__wkVE)
