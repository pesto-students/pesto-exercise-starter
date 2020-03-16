
// (*)
// Follow the instructions and fill in the blank sections.
function User(userName, password) {
  // set a username and password property on the user object that is created
  this.username = userName;
  this.password = password;
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
User.prototype.checkPassword = function checkPassword(password) {
  if (password === this.password) {
    return true;
  }
  return false;
};

export {
  User,
};
