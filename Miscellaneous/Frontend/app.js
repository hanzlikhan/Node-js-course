// // object oriented programming
// // class
// // class is a blueprint for creating objects
// // class is a template for creating objects

// // in javascript arrays are also objects

// // prototype 
// // all strings defined in one prototype 

// let arr1 = [1, 2, 3];
// let arr2 =[1, 2, 3];

// arr1.sayHello = ()=>{
//   console.log('Hello from array 1');
// }

// arr2.sayHello = ()=>{
//   console.log('Hello from array 1');
// }

// // console.log(arr1.sayHello === arr2.sayHello); // false because it is created at the different places.
// console.log("abc".toLowerCase == "xyz".toLowerCase); // true because it has same prototype


// factory function

function personMaker(name, age) {
  return {
    name, 
    age,
    talk() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}


// constructor => does not return anything and start with the capital letter
// function personMaker(name, age) {
//   return {
//     name, 
//     age,
//     talk() {
//       console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };
// }


// constructor 

// it is trickey
function Person(name, age)
{
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function() {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

// instances 
let p1 = new Person('Ali', 20);
let p2 = new Person('Ahmed', 30);

// let p1 = personMaker('Ali', 20);
// let p2 = personMaker('Ahmed', 30);

p1.talk(); // Output: Hi, my name is Ali and I am 20 years old.
p2.talk(); // Output: Hi, my name is Ahmed and I am 30 years old.
