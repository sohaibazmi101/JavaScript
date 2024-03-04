const name = ["Sohaib", "azmi", "Github"];
const email = ["azmi@github", "sohaibazmi101"]
name.push(email);
console.log(name);

const arr1 = [1, 2, "Help", "Git", true];
const arr2 = [6, 9, "Me", "Azmagarh"];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(typeof (arr3));

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = [1,2,[9,3],7,3,2,[1,4,[7,3,[7,90,12]]]];

const arr6 = arr5.flat(Infinity);
console.log(arr6);

console.log(Array.isArray(arr6));
console.log(Array.from("Sohaib"));
console.log(Array.from({name: "Sohaib"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
