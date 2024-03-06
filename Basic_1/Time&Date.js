let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let newDate = new Date();
console.log(newDate.getYear().toLocaleString());

console.log(newDate.getTime().toString());
console.log(Math.ceil(newDate.getTime().toString()/1000));