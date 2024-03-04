const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[3]);

arr.push(6);
console.log(arr);
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
// unshift is used to add the element in begin
arr.unshift(9);
console.log(arr);
// shift is used to remove the elements from begin
arr.shift();
arr.shift();
console.log(arr);

console.log(arr.includes(3));
console.log(arr.includes(9));
console.log(arr.indexOf(4));
console.log(arr.indexOf(19));

// join is used join the array into new array in string format

const arr2 = arr.join();
console.log(arr2);
console.log(typeof arr2);   //  String type

// slice and splice Method

const arr3 = [9, 10, 11, 12, 13, 14, 15];
console.log("A: "+arr3);
const  arr4 = arr3.slice(1,4);
console.log(arr4);
const arr5 = arr3.splice(1,4);
console.log(arr5);
console.log(arr3);
