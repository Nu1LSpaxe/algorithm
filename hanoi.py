"""
Three sticks: A, B, C
Mission: Move all plates from stick A to stick C

When only two plates:
0. A: [p1, p2], B: [], C: []
1. A: [p2],     B:[p1],C: []
2. A: [],       B:[p1],C: [p2]
3. A: [],       B:[],  C: [p1, p2]

To sum up, it's base case if n == 1
And make it as recursion from n == 2
"""

def hanoi(n, A, B, C):
    if n == 1: return [(A, C)]

    # hanoi(n-1, A, C, B) is step 1
    # hanoi(1, A, B, C) is step 2
    # hanoi(n-1, B, A, C) is step 3
    return hanoi(n-1, A, C, B) + hanoi(1, A, B, C) + hanoi(n-1, B, A, C)

n = input("Enter number of plates: ")

for move in hanoi(int(n), 'A', 'B', 'C'):
    print("Move plate from %c to %c" % move)