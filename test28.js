function solution(numbers) {
  // 0부터 9까지의 숫자를 배열로 생성
  const fullSet = Array.from({ length: 10 }, (_, i) => i);
  // fullSet에서 numbers 배열에 없는 숫자만 필터링하고 합산
  const missingSum = fullSet
    .filter((num) => !numbers.includes(num))
    .reduce((acc, cur) => acc + cur, 0);
  return missingSum;
}
