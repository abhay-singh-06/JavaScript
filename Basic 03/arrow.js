const user = {
  username: "Shree",
  price: 900,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);

// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai();

// const addTwo = (number1, nuumber2) => {
//   return number1 + number2;
// };

// const addTwo = (number1, number2) => number1 + number2;
// {
//   console.log(addTwo);
// }
// addTwo(1, 3);

const addTwo = (num1, num2) => num1 + num2;
