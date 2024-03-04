// Object.getOwnPropertyDescriptor(Math)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const Tea = {
  name: "ginger tea",
  price: "400",
  isAvailable: true,

  orderTea: function () {
    console.log(`Tea nahi bani `);
  },
};

// console.log(Tea);

// console.log(Object.getOwnPropertyDescriptor(Tea)); // it will give undefined since we didn't give the value of property here

// console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

for (let [key, value] of Object.entries(Tea)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
} 
