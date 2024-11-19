function solution(n) {
    var answer = [];
    answer.push(n);
    answer = String(answer);

    let result = answer.split('').reverse().map(Number);


    console.log(result);

    return result
}
