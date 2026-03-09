const name = "Abhay Singh";
const repoCount = "10";

//console.log(name + repoCount);
//console.log(`Hello my name is ${name} and my repo is ${repoCount}.`);

const gameName = new String("Abhay-hc-Com");

//console.log(gameName[0]);//Provide value by given index number
//console.log(gameName.__proto__);
//console.log(gameName.length);//to calculate the length of the string
//console.log(gameName.toUpperCase());//this is used to convert in upper case
console.log(gameName.charAt(2)); //provide index value
console.log(gameName.indexOf("b")); //The value at which index present

const newString = gameName.substring(0, 9);
console.log(newString); //Give a specific string

const anotherString = gameName.slice(-9, 3);
console.log(anotherString);

const newStringone = "   Abhay   ";
console.log(newStringone);
console.log(newStringone.trim()); //Trim cut the unusable space

const url = "http://abhay.com/20%singh";
console.log(url.replace("20%", "-")); //This can replace the word
