export const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

export const getRandomNum = (mi = 1, ma = 100) => Math.floor(Math.random() * (ma - mi + 1)) + mi;
