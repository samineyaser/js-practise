//code driven nvocation
function myFunction(name, middleName = 'eyaser'){
    console.log('My name is ' + name + ' My Middle name is '+ middleName);
}
myFunction('samin', 'Eyaser');
myFunction('samin');

//event driven invocation
function isSubscribed(){
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);
//self invoked
(function(message){
    console.log("Hello this is a auto funtion " + message);
})('hello')
//normal expression
let newvar = function newFuntion(x , y){
    return x * y ;
    console.log('ali');
}
console.log(newvar(3,4));

// Annonymous funtion 
let numbers = [4,5,6,7];
let sqNumber = numbers.map(function(number){
    return number*number;
})
console.log(sqNumber);


// array function 
let add = (a,b)  => a+b;
console.log(add(2,4));

// nested funtion 
function greeting(firsName){
    function sayhello(){
        console.log('Hello ' + firsName); 
    }
    return sayhello();
}
greeting('samin')