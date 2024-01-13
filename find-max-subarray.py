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