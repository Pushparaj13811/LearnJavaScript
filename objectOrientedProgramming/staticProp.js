class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const Pushparaj = new User("Pushparaj");
// console.log(Pushparaj.createId()); // Outputs

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Alpana = new Teacher("Alpana", "Alpana@google.com");
Alpana.logMe();
console.log(Alpana.createId());
