//function in js
//function basic structure and function invock;

function sayHello(){
    console.log('Hello world');
}
sayHello();

//function parameter
function add(num1,num2){
    console.log(num1+num2);
}
add(10,10);

//function with different paramenter;
function sayHello(username){
    console.log('Hello',username);
}
sayHello('Mahim');
sayHello('Ridoy');
sayHello('Nahid');

//java return keyword;
function add(num1,num2){
    return num1+num2;
}
let result1=add(10,20);
let result2=add(50,30);
let result3=add(100,20);
let result4=add(150,200);
console.log(result1,result2,result3,result4);

//function with no parameter value;
function add(num1,num2){
    if(!num1){
        num1=0;
    }
    if(!num2){
        num2=0;
    }
    return num1+num2;
}
let result1=add();

console.log(result1);

//function with direct parameter value:
function add(num1=0,num2=0){
    return num1+num2;
}
let result1=add();
console.log(result1);


//function order:
function sayHello(){
    console.log('Hello Js');
}
function OnceSayHello(){
    sayHello();
}
function OnceAgainSayHello(){
    OnceSayHello();
}
OnceAgainSayHello();