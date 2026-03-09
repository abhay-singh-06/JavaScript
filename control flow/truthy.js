const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy values

//false,0,-0,"",BigInt On,null,undefined,NaN

//truthy value
//"0",'false'," ",[],{},function(){}

// if (userEmail.length === 0) {
//   console.log("Arrey is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).lenght === 0) {
  console.log("Object is empty");
}

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);
