const User = {
  _email: "PushparajMehta002@gmail.com",
  _password: "ancoj",
  get email() {
    return this._email.toLowerCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
