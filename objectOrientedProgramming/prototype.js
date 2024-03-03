let myName = "Pushparaj        ";

let mySurname = "Mehta   ";

// console.log(myName.length);

let myHeros = ["thor", "spiderman", "batman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  batman: "nopower",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// We are accessing the top level hirarchy and give the power to everyone
Object.prototype.Pushparaj = function () {
  console.log("Pushparaj is present in all object");
};

//  Let me test it we inject power in array then it will be in object or not

Array.prototype.heyPusparaj = function () {
  console.log(`Pushparaj say Hello`);
};

// if we give access  of Pushparaj to array element then  it will work on that particular element only i.e. in array only. It won't be accessable by object

// heroPower.Pushparaj();
// myHeros.Pushparaj();
// myHeros.heyPusparaj();
// heroPower.heyPusparaj();

const User = {
  name: "Pushparaj",
  email: "pushparaj@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; // Now Teacher has properties of user as well. These are outdated apporoach.

// modern syntax

Object.setPrototypeOf(Teacher, User);

let anotherUsername = "coffee      ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True lenght is : ${this.trim().length}`);
};

anotherUsername.trueLength();
"Pushparaj".trueLength();
"iceTea".trueLength();
