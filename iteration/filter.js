// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   return item;
//   console.log(item);
// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

const books = [
  { titrl: "Book one", genre: "Fiction", publish: 1981, edition: 2004 },

  { titrl: "Book two", genre: "Non-Fiction", publish: 1981, edition: 2004 },

  { titrl: "Book three", genre: "History", publish: 1981, edition: 2004 },

  { titrl: "Book four", genre: "Non-Fiction", publish: 1981, edition: 2004 },

  { titrl: "Book five", genre: "Science", publish: 1981, edition: 2004 },

  { titrl: "Book six", genre: "Fiction", publish: 1981, edition: 2004 },
  { titrl: "Book seven", genre: "History", publish: 1981, edition: 2004 },

  { titrl: "Book eight", genre: "science", publish: 1981, edition: 2004 },

  { titrl: "Book nine", genre: "Non-Fiction", publish: 1981, edition: 2004 },
];

let userBook = books.filter((bk) => bk.genre === "History");
console.log(userBook);
