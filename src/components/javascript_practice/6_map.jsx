//! ES6 JS Map

const instructors = [
    {name: 'Quincy', specialty: "Quantam Mechanics"},
    {name: "Kenn", specialty: "Norse Mythology"},
    {name: "Carolyn", specialty: "Kung Fu"},
    {name: "Paul", specialty: "Entomology"}
];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names); // [ 'Quincy', 'Kenn', 'Carolyn', 'Paul' ]

//! map
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames); // [ 'Quincy', 'Kenn', 'Carolyn', 'Paul' ]

const instructorInfo = instructors.map(i => `${i.name}: ${i.specialty}`);
console.log(instructorInfo);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray); // [ { key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 } ]

let reformattedArray = kvArray.map(obj => {
    let rObj= {};
    rObj[obj.key] = obj.value;
    console.log(rObj);  // { '1': 10 }
                        // { '2': 20 }
                        // { '3': 30 }
    // console.log(reformattedArray); //! ReferenceError: Cannot access 'reformattedArray' before initialization
});

console.log(reformattedArray); //! [ undefined, undefined, undefined ]