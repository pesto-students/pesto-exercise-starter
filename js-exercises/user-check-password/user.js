function User(username, password) {
  Object.assign(this, { username, password });
}

// eslint-disable-next-line
User.prototype.checkPassword = function(passToCompare) {
  return this.password === passToCompare;
};
export { User };
