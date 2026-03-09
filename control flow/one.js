//if
const isUserloggedIn = true;
const temprature = 41;

// if (temprature === 40) {
//   console.log("less than 50");
// } else {
//   console.log("temprature is greater than 50");
// }

//console.log("execute");
//<,>,==,=!,===,!==,>=,<=

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User power:${power}`);
// }

const userloggedIn = true;
const twefthPass = true;
const graduationPass = true;
const loggedInEmail = true;

if (userloggedIn && twefthPass && graduationPass) {
  console.log("Bank form fill eligible");
}
if (userloggedIn || twefthPass || graduationPass) {
  console.log("Eligible in any exam paper");
}
