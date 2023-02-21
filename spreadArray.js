const number = [2, 3, 1, 5, 6, 7, 53, 21];
const number2 = [21, 45, 67];

// console.log(Math.min(...number));


const newArr = [23, 451, 51, ...number, 88];

// console.log(newArr);

const arr1 = [1, 2, 4, 5, 3];

const arr2 = [...arr1];

arr1.push(99);
arr1.push(100);

arr2.push(55);

// console.log(arr1);
// console.log(arr2);


const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, ...remaining] = arr3;
console.log(first, second);
console.log(remaining);