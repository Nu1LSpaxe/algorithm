# Iterative
def iterative_max_subarray(A):
    n = A.length
    maxSum = 0
    sum = 0

    for i in range(1, n):
        currHigh = i

        if sum > 0:
            sum += A[i]
        else:   # sum <= 0
            currLow = i
            sum = A[i]
        
        if sum > maxSum:
            maxSum = sum
            low = currLow
            high = currHigh
    
    return (low, high, maxSum)

# Recursion
# cut from mid -> divide and conquer
# case 1: find max subarray of [left to mid]
# case 2: find max subarray of [mid+1 to right]
# But we're not consider cross-middle yet.
# case 3: find max subarray from mid (to left and to right)
# Answer: max(case 1, case 2, case 3)