function solution(n, works) {
    let answer = 0;
    works.sort((a,b)=>b-a)
    let max=works[0]
    while(n>0){
        if(max===0) break;
        for(let i=works.length;i>=0;i--){
            //console.log(works)

            if(max===works[i]){
                works[i]--;
                n--;
            }
            if(!n) break;
        }
        max--;
    }
    //console.log(works)
    answer = works.map(work=>work*work).reduce((acc,cur)=>acc+cur)
    return answer;
}