function solution(number, k) {
    var stack = [];
    for (var i = 0; i < number.length; i++) {
        var now = number[i];

        while (k > 0 && stack[stack.length - 1] < now) {
            stack.pop();
            k--;
        }
        stack.push(now);
    }
    stack.splice(stack.length - k, k);
    var answer = stack.join('');

    return answer;
}