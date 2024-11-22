function solution(x) {
  let sum = String(x)
    .split("")
    .reduce(function (prev, currnet) {
      return prev + Number(currnet);
    }, 0);

  if (x % sum === 0) {
    return true;
  }
  return false;
}
