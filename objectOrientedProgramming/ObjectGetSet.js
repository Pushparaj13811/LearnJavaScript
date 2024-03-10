const User = {
  _email: "PushparajMehta002@gmail.com",
  _password: "ancoj",
  get email() {
    return this._email.toLowerCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return `${this._password}/[^\w]/g, "")`;
  },
  set password(value) {
    this._password = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
console.log(tea.password);
