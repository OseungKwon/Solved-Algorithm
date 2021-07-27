def solution(prices):
    answer = [0 for _ in range(len(prices))]
    stack=[]
    for i in range(len(prices)):
        while len(stack)!=0 and prices[i]<prices[stack[len(stack) -1]]:
            temp = stack.pop()
            answer[temp] = i-temp
        stack.append(i)

    while len(stack):
        temp = stack.pop()
        answer[temp] = len(prices) - temp - 1
    return answer