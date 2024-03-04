// // ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

// function User(username, emai, password) {
//   this.username = username;
//   this.emai = emai;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "12345");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was addes by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();
chai.logMe();

const greenTea = new User("Green Tea");
// greenTea.addCourse();  - Error because it's not a method of the User class
greenTea.logMe();

console.log(chai === greenTea);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
