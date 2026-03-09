marval_heros = ["Thor", "Ironman", "spiderman"];
dc_heros = ["superman", "flash", "batman"];

//console.log(marval_heros);
//const allHeros = marval_heros.concat(dc_heros);
//console.log(allHeros);//concate can use to combine the array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

console.log(Array.isArray("Abhay_Singh"));
console.log(Array.from("Abhay_Singh"));
console.log(Array.isArray((name = "Abhay_Singh")));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
