function solution(genres, plays) {
    var answer = [];
    var genresObj = {}
    var music = []
    // 장르 내부 plays수 구하기
    genres.forEach((genre, i) => {
        genresObj[genre] = genresObj[genre] ? genresObj[genre] + plays[i] : plays[i]
    })
    var genArray = Object.entries(genresObj).sort((a, b) =>
        b[1] - a[1]
    )

    // genres, plays를 담는 music 객체 생성
    for (var i = 0; i < genres.length; i++) {
        music.push({ genre: genres[i], play: plays[i], index: i })
    }
    music.sort((a, b) => b.play === a.play ? a.index - b.index : b.play - a.play)

    for (var [key, value] of genArray) {
        var count = 0
        music.map(t => t.genre === key && count++ < 2 && answer.push(t.index))
    }
    return answer;
}