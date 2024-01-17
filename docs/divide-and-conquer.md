# Divide and Conquer

- [Divide and Conquer](#divide-and-conquer)
  - [Time Complexity](#time-complexity)
  - [How to solve recurrence relations ?](#how-to-solve-recurrence-relations-)
  - [Substitution method](#substitution-method)
    - [Mathematical Induction Common Form](#mathematical-induction-common-form)
    - [Example](#example)
      - [Step 1: Guess the form of the solution](#step-1-guess-the-form-of-the-solution)
      - [Step 2: Show the guess is correct](#step-2-show-the-guess-is-correct)
  - [Recursion-tree method](#recursion-tree-method)
  - [Closest pair of points](#closest-pair-of-points)
    - [1D closest pair of poitns](#1d-closest-pair-of-poitns)
      - [Brute force](#brute-force)
      - [Sorting-based](#sorting-based)
    - [2D closest pair of poitns](#2d-closest-pair-of-poitns)
      - [Divide](#divide)
      - [Conquer](#conquer)
      - [Combine](#combine)
    - [Running time analysis](#running-time-analysis)

---

## Time Complexity

$
T(n) = \Theta(1) \text{ if } n \le c \text{ , otherwise } aT(\frac{n}{b}) + D(n) + C(n)
$

- $T(n)$ = running time for input size **n**
- $D(n)$ = time of Divide for input size **n**
- $C(n)$ = time of Combine for input size **n**
- $a$ = numbers of subproblems
- $\frac{n}{b}$ = size of each subproblem

<br>

## How to solve recurrence relations ?

- **Substitution method** \
   Make a guess and then prove by mathematical induction
- **Recursion-tree method** \
   Expand the recurrence into a tree and sum up the cost
- **Master method** \
   Apply the master theorem to a specific form of recurrences

<br>

## Substitution method

_Step 1_: **Guess** the form of the solution using **symbolic constants** \
_Step 2_: Use mathematical induction to show that the solution works, and **find the constants** \

> If the guesss is proven wrong, go back to Step 1.

### Mathematical Induction Common Form

- Induction hypothesis
- Base Case : prove the hypothesis exists when n = 1
- Inductive Step : prove if the hypothesis exists when n = k, then also exists when n = k + 1
- If the hypothesis exists in base case and inductive step, then induce the hypothesis exists in all positive integers.

### Example

$T(n) = 2T(\lfloor \frac{n}{2} \rfloor) + n \text{. What is T(n)?}$

#### Step 1: Guess the form of the solution

we guess $T(n) = O(n logn) \iff$ Exist positive constants $n_0$ and $c$, s.t. $\forall n \ge n_0$, $T(n) \le cnlogn$

#### Step 2: Show the guess is correct

Base case : For $n = n_0$, $T(n_0) \le cn_0logn_0$ ... (1) \
Inductive step : $\forall n_0 \le n < n_1$, $T(n) \le cnlogn \implies T(n_1) \le cn_1logn_1$ ... (2)

**We need to find $c$ and $n_0$ to make (1) and (2) are established** \
**According to satisfy conditions, to prove $T(n) = O(nlogn)$**

<br>

## Recursion-tree method

1. Expand a recurrence into a tree
2. Sum up the ocst of all nodes as an educated guess
3. Verify the guess as in the substitution method

Appendix:

- [How to solve time complexity Recurrence Relations using Recursion Tree method?](https://www.geeksforgeeks.org/how-to-solve-time-complexity-recurrence-relations-using-recursion-tree-method/)
- [How to analyse Complexity of Recurrence Relation](https://www.geeksforgeeks.org/how-to-analyse-complexity-of-recurrence-relation/)

<br>

## Closest pair of points

_Input_ : A set of points $\{p_1, \dots, p_n\}$ \
_Output_ : The pair of points $\{p_i, p_j\}$ that are closest together

> Define shortest distance according to Euclidean distance

### 1D closest pair of poitns

#### Brute force
Checking all pairs and returning the closest, $\Theta(n^2)$

#### Sorting-based
Scan the sorted points to find the closest pair $\implies$ after sorted, linear search, $\Theta(n logn)$

### 2D closest pair of poitns
#### Divide
Divide points **evenly** along the $x$-coordinate

#### Conquer
Find the closest pair in each region recursively

#### Combine
**Find the closest pair across two regions**; return the bast of three solutions

### Running time analysis
- Base case $(n \le 3)$: $O(1)$
- Recursive case $(n > 3)$
  - Divide: sorting $\implies O(n log n)$
  - Conquer: $2T(\frac{n}{2})$
  - Combine: sorting $\implies O(n log n)$