
function solution(x, n) {

    var answer = [];

    for (let i = 1; i <= n; i++) {
        answer.push(i * x)
    }
    console.log(answer)
    return answer;
}

solution(2, 5)

