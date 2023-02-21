const person = {
    name: 'Hero Alam',
    age: 34,
    phone: 043133567,
    address: 'bari nai',
    p: [1, 2, 3, 4],
}

// const { address: bari, name, age, phone } = person;
// console.log(bari, name, age, phone);

let { name, address, ...badbakisob } = person;
// console.log(badbakisob);

const person2 = { ...person };

/* adding new property to a object */
person2.isMale = true;

console.log(person2);

