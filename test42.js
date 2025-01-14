function solution(t, p) {
  let result = 0;
  const pNumber = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.slice(i, i + p.length);
    const substringNumber = Number(substring);

    if (substringNumber <= pNumber) {
      result++;
    }
  }

  return result;
}
