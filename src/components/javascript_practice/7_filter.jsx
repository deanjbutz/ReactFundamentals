//! ES6 JS Filter

const instructors = [
    {name: 'Quincy', specialty: "Quantam Mechanics", medals: 7},
    {name: "Kenn", specialty: "Norse Mythology", medals: 5},
    {name: "Carolyn", specialty: "Kung Fu", medals: 8},
    {name: "Paul", specialty: "Entomology", medals: 4}
];

let instructor_names = [];

for( i = 0; i < instructors.length; i++ ) {
    if ( instructors[i].medals >= 5 ) {
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names); // [ 'Quincy', 'Kenn', 'Carolyn' ]

//! filter

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);   // [
                                //     { name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7 },
                                //     { name: 'Kenn', specialty: 'Norse Mythology', medals: 5 },
                                //     { name: 'Carolyn', specialty: 'Kung Fu', medals: 8 }
                                // ]

const instructorInfo = instructors.filter(i => i.name == "Kenn");
console.log(instructorInfo); // [ { name: 'Kenn', specialty: 'Norse Mythology', medals: 5 } ]