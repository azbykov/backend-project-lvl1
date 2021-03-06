const getRandomNum = (mi = 1, ma = 100) => Math.floor(Math.random() * (ma - mi + 1)) + mi;
export default getRandomNum;
export { getRandomNum };
