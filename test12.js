function solution(arr) {
    var answer = 0;
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        a = a + arr[i]
    }
    answer = a / arr.length
    return answer;
}