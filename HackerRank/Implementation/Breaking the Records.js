function breakingRecords(scores) {
    let checkScores = new Array(2).fill(scores[0]);
    let count = new Array(2).fill(0);
    scores.map(score => {
        console.log(score)
        score < checkScores[0] ? ((checkScores[0] = score) && count[0]++) :
            (score > checkScores[1] && (checkScores[1] = score) && count[1]++)
        console.log(checkScores)
    })
    return [count[1], count[0]]

}