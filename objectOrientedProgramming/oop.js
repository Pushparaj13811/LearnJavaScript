const user = {
  username: "Pushparaj",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise();

const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //   return this;
}

const userOne = new User("Pushparaj", 10, true);
const userTwo = new User("Pritee", 12, true);

console.log(userOne);
console.log(userTwo);
