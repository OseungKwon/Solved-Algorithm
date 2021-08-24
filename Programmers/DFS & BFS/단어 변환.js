// 뭔가.. 막 풀었는데 답이 나왔다 ㅎㅎㅎ
function solution(begin, target, words) {
    words.unshift(begin)
    let temp = []
    let visited = new Array(words.length).fill(false);

    for (let i = 0; i < words.length; i++) {
        let nodes = []
        let at = words[i].split('')

        for (let j = 1; j < words.length; j++) {
            let bt = words[j].split('')

            var count = 0;

            for (let k = 0; k < at.length; k++) {
                if (at[k] !== bt[k]) {
                    count++;
                }
            }
            if (count === 1) {
                nodes.push(bt.join(''))
            }

        }

        temp.push(nodes)
    }
    console.log('temp', temp)

    var cnt = 0;

    const bfs = (graph, computer, visited) => {
        cnt++;
        let k = words.indexOf(computer);
        const queue = [computer];
        visited[k] = true;

        while (queue.length !== 0) {
            const node = queue.shift();
            console.log(node)
            let k = words.indexOf(node);
            if (graph[k].find(g => g === target)) {
                return;
            }
            graph[k].forEach((item, index) => {
                // 방문한 적이 없다면
                let i = words.indexOf(item);
                if (!visited[i]) {
                    // 큐에 추가
                    queue.push(item);
                    // 방문 처리
                    visited[i] = true;
                    if (index + 1 === graph[k].length) {
                        cnt++;
                    }
                }
            })
            if (queue.length === 0 && node !== target) {
                cnt = 0;
                return;
            }
        }

    };
    bfs(temp, words[0], visited)
    return cnt;
}