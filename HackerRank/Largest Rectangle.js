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
*/
// 2트
function largestRectangle(heights) {
    let result = 0;
    let stack = []

    heights.map((h, index) => {
        if (stack.length === 0) {
            stack.push([h, index])
        } else {
            let width = index;
            while (stack.length !== 0 && h < stack[stack.length - 1][0]) {
                let value = stack.pop();
                width = value[1];
                let size = value[0] * (index - value[1])
                if (result < size) result = size
            }
            stack.push([h, width])
        }
    })

    stack.map(s => {
        let size = s[0] * (heights.length - s[1])
        if (result < size) result = size
    })
    return result;

}