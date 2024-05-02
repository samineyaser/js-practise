// let userinput = prompt('Enter a number');
// let number = parseInt(userinput);

// if(number % 2 === 0){
//     console.log(`${number} is a even number`);
// }else {
// console.log(`${number} is a odd number`);
// }

// let x = 10;
// x++;
// console.log(x);

// let a = 5;
// let b = 10;
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

// let t = a >b ? 'true' : 'false';

// console.log(t);

// Js top key features 
// Array, function, Object, Evernts
// object liters
const newSymble = Symbol('nothing');
const newObject ={
    name : "samin",
    lName : "Eyaser",
    age : 25,
    nameArray : ['samin', 'eyaser', "sanil"],
    [newSymble] : 'mykey 1',
    'here is my name': 'my name is samin'
};

console.log(newObject['here is my name']);