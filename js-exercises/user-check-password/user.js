
// (*)
// Follow the instructions and fill in the blank sections.
function User(username,password) {
  this.username = username;
  this.password = password;
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
User.prototype.checkPassword = function checkPassword(str) {

  if(this.password === str){
    return true;
  }else{
    return false;
  }

};

export {
  User,
};
