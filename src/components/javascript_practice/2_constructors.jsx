//! ES6 JS Constructors

// we name the class
class User {
    // we call the constructor function and create parameters
    // these will be values that we want to be passed in and stored in the object
    constructor(first, last, e) {
        // on the right side of the below expressions, the word 'first', 'last', and 'e' are the values that are getting passed in as the arguments when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
        // on the left side, we have the actual keys of the object being created. The left side stores the incoming arguments from the newly created object as the value for 'this' specific object being created
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f);     // Paul
console.log(userOne.l);     // O'Connor
console.log(userOne);       // User { f: 'Paul', l: "O'Connor", email: 'poconnor@elevenfifty.org' }

class Player {
    constructor(name, number, averagePoints) {
        this.name = name;
        this.number = number;
        this.averagePoints = averagePoints;
    }
}

let playerOne = new Player("Dean", 25, 9.6)
console.log(`${playerOne.name} has ${playerOne.number} points and a rating of ${playerOne.averagePoints}.`);