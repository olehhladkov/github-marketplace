function sum(a, b) {
  return a + b;
}

function sum10 (a) {
  return sum(a, 10);
}

module.exports = {
  sum,
  sum10
}