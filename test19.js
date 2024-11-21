function solution(n) {
  let answer = 0;
  let routeN = Math.sqrt(n);
  if (Number.isInteger(routeN) && routeN > 0) {
    routeN += 1;
    answer = routeN ** 2;
  } else {
    answer = -1;
  }
  return answer;
}
