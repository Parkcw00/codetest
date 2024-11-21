function solution(n) {
  var answer = 0;

  let nArr = String(n).split("").map(Number);
  console.log(nArr);
  nArr.sort((a, b) => b - a);
  console.log(nArr);
  answer = Number(nArr.join(""));
  console.log(answer);
  return answer;
}
solution(51234);
