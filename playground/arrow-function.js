var square = (x) => x*x;
console.log(square(9));

//arrow function do not bind to 'this'
var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(`hi.. im ${this.name}`);
    },
    sayHiAlt () {
        console.log(`hi.. im ${this.name}`);
    }
};
user.sayHiAlt();