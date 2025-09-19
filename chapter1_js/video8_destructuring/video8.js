// The old way:
// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age; console.log(name); //Eric
// console.log(age); //26

// With destructuring (object):
const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { age, name } = person;

console.log(name); //Eric
console.log(age); //26

//Array
const city = ["Ha Noi", "Da Nang", "Sai Gon", "Ca Mau"];
// old way
// const hanoi = city [0];
// const danang = city [1];
// const hcm = city [2];

//With destructuring: (array quan trọng thứ tự)
const [a, b, c] = city; //Hanoi Danang Saigon
// const [ a, b,  , c] = city; //Hanoi Danang Camau

console.log(a, b, c);

//Ex01
const react = ["facebook", "all-in-one", "javascript"];
const [, , tech] = react;
console.log(tech); //javascript

const dev = {salary: 2000, tool: "laptop", like: "bug"}
const {like} = dev
console.log(like) //bug