function solution(s) {
  return s
    .split("") // 문자열을 문자 배열로 변환
    .sort((a, b) => {
      const isLowerA = a === a.toLowerCase();
      const isLowerB = b === b.toLowerCase();

      if (isLowerA && !isLowerB) return -1; // 소문자가 대문자보다 우선
      if (!isLowerA && isLowerB) return 1; // 대문자는 소문자보다 뒤로
      return b.localeCompare(a); // 동일한 종류의 문자(대문자끼리 또는 소문자끼리)는 내림차순 정렬
    })
    .join(""); // 배열을 문자열로 변환
}
