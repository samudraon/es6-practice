const add = function (x, y) {
    return x + y;
}

// console.log(add(3, 4));

/* convert into arrow function */
const sum = (x, y) => x + y;

// console.log(sum(3, 4));


/* another way */
const showName = name => console.log(name);
showName('SAM');

/* another way */
const hello = () => console.log('Hello World');
hello();
