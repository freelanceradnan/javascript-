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