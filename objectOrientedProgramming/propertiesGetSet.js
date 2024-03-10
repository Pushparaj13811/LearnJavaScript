function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toLowerCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toLowerCase();
    },
    set: function (value) {
      this.password = value;
    },
  });
}

const chai = new User("Chai002@chai.com", "chai");
console.log(chai.email);
