function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  if (totalPrice > money) {
    return Math.abs(totalPrice - money);
  }

  return 0;
}
