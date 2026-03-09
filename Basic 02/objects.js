//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "javascript";
tinderUser.isLoogedInn = false;

//console.log(tinderUser);

const regularUser = {
  email: "itsmehere123@gmail.com",
  full_name: {
    userfullname: {
      firstname: "java",
      lastname: "script",
    },
  },
};

//console.log(regularUser.full_name.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

//const obj4 = { obj1, obj2 };
//const =Object.assign({},obj1,obj2,obj3)

//console.log(obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj3 };
//console.log(obj4);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));

const course = {
  coursename: "javascript in hindi",
  price: "999",
  courseInstructor: "sir",
};

console.log(course);
