arr = [list(map(int, input().split())) for _ in range(9)]
empty_arr = [(i, j) for i in range(9) for j in range(9) if arr[i][j] == 0]

def candidating(x, y):
numbers = [i + 1 for i in range(9)]
for i in range(9):
    if arr[x][i] in numbers:
        numbers.remove(arr[x][i])
if arr[i][y] in numbers:
    numbers.remove(arr[i][y])
x = x//3
y = y//3
for i in range(x * 3, (x + 1) * 3):
    for j in range(y * 3, (y + 1) * 3):
        if arr[i][j] in numbers:
            numbers.remove(arr[i][j])
return numbers
def DFS(count):
if count == len(empty_arr):
    for row in arr:
        print(* row)
exit()
    (i, j) = empty_arr[count]
candi = candidating(i, j)
for num in candi:
    arr[i][j] = num
DFS(count + 1)
arr[i][j] = 0

DFS(0)