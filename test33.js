function solution(left, right) {
  // 약수의 개수를 구하는 함수
  function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        count++;
        if (i !== n / i) {
          // 제곱수가 아닐 경우 약수 쌍도 추가
          count++;
        }
      }
    }
    return count;
  }

  let total = 0;

  // left부터 right까지 모든 수 순회
  for (let num = left; num <= right; num++) {
    if (countDivisors(num) % 2 === 0) {
      // 약수의 개수가 짝수면 더하기
      total += num;
    } else {
      // 약수의 개수가 홀수면 빼기
      total -= num;
    }
  }

  return total;
}
