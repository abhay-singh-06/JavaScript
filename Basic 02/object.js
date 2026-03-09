//object create

const mySym = Symbol("key1");
const jsUser = {
  name: "Abhay",
  "full name": "Abhay Singh",
  [mySym]: "mykey1",
  age: 18,
  location: "jaipur",
  email: "abhaysingh_123@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
//console.log(jsUser.email);
//console.log(jsUser.age);
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user,$(this.name`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
