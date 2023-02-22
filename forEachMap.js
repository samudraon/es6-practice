const arr = [10, 20, 30, 40, 50];

// arr.forEach(number => console.log(number));

// const newArr = arr.map(number => number * 2);
// console.log(newArr);
// console.log(arr);

arr.forEach((number, index, a) => {
    console.log(number + ' ' + index + ' ' + a);
})