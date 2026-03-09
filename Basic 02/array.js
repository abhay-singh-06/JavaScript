// array

const myArr = [0, 1, 2, 3, 4];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

//console.log(myHeros);
//console.log(myArr2);

//Array Methods

//myArr.push(6);//push adding a element
//myArr.pop();//delete the last element

//myArr.unshift(9);//unshift can add element at last position
//myArr.shift();//delete the first element
//console.log(myArr.indexOf(2));

//slice- Not remove the element from the array
//splice-Remove the element from the array

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.slice(1, 3);
console.log(myn2);
console.log("C", myArr);
