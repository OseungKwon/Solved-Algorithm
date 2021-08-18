// 1번쨰
/*
function largestRectangle(h) {
    var result = 0;
    var stack = []
    for(var i=0;i<h.length;i++){
        if(stack.length===0){
            stack.push([i,h[i]])
        }else{
            var width = i;
            while(stack.length!==0 && stack[stack.length-1][1]>h[i]){
                var value = stack.pop();
                width = value[0];
                var size = value[1]*(i-value[0])
                //console.log(size)
                if(result<size){
                    result = size;
                }
            }
            stack.push([width,h[i]])
        }
        //console.log(...stack)
    }
    stack.map(s=>{
        var size=s[1]*(h.length-s[0]);
        if(result<size){
            result=size
        }
    })
    return result
}
*///
// 2트+주석 추가
function largestRectangle(heights) {
    let result = 0;
    let stack = []

    heights.map((h, index) => {

        // 스택이 비어있다면 [h, index]의 배열 형태로 stack에 push한다.
        if (stack.length === 0) {
            stack.push([h, index])
        } else {
            // 그렇지 않다면,
            // 가로 길이를 인덱스로 설정하고,
            let width = index;
            // 현재 빌딩보다 자신의 앞 빌딩 크기가 더 크다면, 
            while (stack.length !== 0 && h < stack[stack.length - 1][0]) {

                // 앞 빌딩을 stack에서 빼와, value에 저장한다.(현재 빌딩을 아직 stack에 넣지 않았기 때문)
                let value = stack.pop();
                // 가로 길이는 앞 빌딩의 index가 되고,
                width = value[1];
                // 그 결과 사각형의 넓이는 앞 빌딩의 높이 * (현재 빌딩까지 index- 앞 빌딩) 이 된다.
                let size = value[0] * (index - value[1])
                // 만약, 더 큰값이 들어오면 result 교체
                if (result < size) result = size
            }
            // 현재 결과를 width 정보와 함께 stack에 넣어준다.
            stack.push([h, width])
        }
    })
    // 스택을 순회하면서, 더 큰 사각형을 만들 수 있다면, 찾아준다.
    stack.map(s => {
        let size = s[0] * (heights.length - s[1])
        if (result < size) result = size
    })
    return result;

}