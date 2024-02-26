const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, networkcall
  setTimeout(function () {
    // console.log("Aync task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("Promise consumed");
}); // .then has straight connection with resolve

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Pushparaj", email: "pushparajmehta@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  //   console.log(user);
});

const promiseFour = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      reslove({ username: "Pushparaj1381", password: "123456" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      reslove({ username: "Javascript", password: "1234567890" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// Either we can use .then() or .catch() or we can use async await to handle promise
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
// promise is an object  that represents a value not necessarily available now but expected in the future.

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.lof("E:", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/Pushparaj13811")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
