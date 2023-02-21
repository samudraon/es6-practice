const person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '016423214',
        email: 'abul@gmail.com'
    },
    education: {
        schoolName: 'andorkilla high school',
        subject: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}

console.log(person.education.subject[1].mark);


/* dot notation. will use most of the time */
// const age = person.age;

/* bracket notation */
// const age = person['age'];


// const property = 'name';
// const name = person[property];



// console.log(name);