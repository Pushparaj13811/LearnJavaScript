function setUsername(username) {
  //complex DB calls
  this.username = username;
}
function createUser(username, email, password) {
  setUsername(username); // In this case it is not beling call if we want to call then we need to call is explictly

  setUsername.call(username); // .call method is used to hold the refrence
  setUsername.call(this, username); // now it will store in the createUser

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@facebook.com", "1223");
console.log(chai);
