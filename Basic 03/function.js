function sayMyname() {
  console.log("S");
  console.log("H");
  console.log("R");
  console.log("E");
  console.log("E");
}
//sayMyname();

//function addTwoNumber(Number1, Number2) {
//console.log(Number1 + Number2);
//}

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  //return result;
  return number1 + number2;
}

//const result = addTwoNumbers(3, 4);
//console.log("Result:", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("Hello"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//console.log(calculateCartPrice(200, 300, 400));

function handleObject(anyObject) {
  //console.log(
  // `username is ${anyObject.username} and price is ${anyObject.Price}`,
  //);
}

// handleObject({
//   username: "sam",
//   Price: 199,
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
