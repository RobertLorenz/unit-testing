module.exports = function () {
  this.add = function (a, b) {
    return a + b;
  };

  this.multiply = function (a, b) {
    return a * b;
  };

  this.fibonacci = function (n) {
    if (typeof n !== "number" || n < 0) {
      return -1;
    }
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  };
};
