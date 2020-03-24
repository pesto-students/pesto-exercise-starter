function myPromise(callBack) {
  this.state = "pending";
  this.result = undefined;

  const resolve = (...values) => {
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    this.result = values;
    this.onResolved(this.result);
  };

  const reject = (...values) => {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.result = values;

    this.onRejected(this.result);
  };

  callBack(resolve, reject);
}

myPromise.prototype.then = function(onResolved, onRejected) {
  this.onResolved = onResolved;
  return this;
};

myPromise.prototype.catch = function(onResolved, onRejected) {
  this.onRejected = onRejected;
  return this;
};

export { myPromise };
