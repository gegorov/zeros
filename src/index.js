module.exports = function getZerosCount(number) {
  // your implementation
  let count = 0;
  let num = number;
  while (num >= 5) {
    num = Math.floor(num / 5);
    count = count + num;
  }
  return count;
};
