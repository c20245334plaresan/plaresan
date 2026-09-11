const myName = "John Arvin Plaresan";
let age = 21;
const number = "09216600020";
const address = "BRGY XI GAWAHON,VICTORIAS CITY,";

console.log(`Name ${myName}`);
console.log(`Age ${age}`);
console.log(`Number ${number}`);
console.log(`Address ${address}`)

// Functions

function greet(name) {
    return `Good morning, ${name}!`;

}

console.log (greet (`John Arvin`));

function add (a,b) {
    return a + b;
}
function mdas (num1,num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;
    return (`values: ${num1} and ${num2}, product: ${m}, quotient: ${d}, sum: ${a}, difference: ${s}`);
    
    }
   
   console.log (mdas(5,3));




function add (a,b) {
    return a + b;
}
function mdas (a,b) {
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient = a / b;

    return (`values: ${num1} and ${num2}, product: ${m}, quotient: ${d}, sum: ${a}, difference: ${s}`);
    
    
} 
console.log(mdas(5,3));


