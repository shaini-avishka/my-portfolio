
let name = "Mosh" ; 
console.log(name) ;

let firstName = "Mosh", lastName = "Hamedani " ; 
console.log(firstName,lastName) ; 

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


let age = 30;
let isApproved = undefined;
let selectedColour = null;
console.log(age,isApproved,selectedColour) ;

let person = {        
    name:"Mosh"
};   
 console.log(person);

person.name = "John " ;

person ["name"] = "Mary" ;

console.log(person.name) ;
 
let selection = "name";
person [selection] = "Mary" ;

console.log(person.name);

let selectedColours = ["red", "blue"]; 

console.log(selectedColours);
console.log(selectedColours[0]);

selectedColours[2] = "green";
console.log(selectedColours);

selectedColours[2] = 1;
console.log(selectedColours);

selectedColours[3] = 2;
console.log(selectedColours.length);

function greet() {
console.log("Hello world");
}

greet();

function greet(name) {
console.log("Hello" + name);
}

greet("Shaini");

function greet(name, lastName) {
console.log("Hello" + name + " " + lastName);
}
greet("John", "Smith" );

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);


