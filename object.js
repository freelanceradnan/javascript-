//javascript object and this keywords
//object literal and accessing
let person={
    name:'adnan',
    age:20,
    sayHello(){
        console.log('Hello world');
    },
}
console.log(person.name);

//object and accessing value;
let person={
    name:'adnan',
    age:21,
    sayHello(){
        console.log('Hello');
    },
}
console.log(person['name']);

//object methods accessing:
let person={
    name:'adnan',
    age:21,
    sayHello(){
        console.log('hello github');
    },
}
person.sayHello();

//accessing object
let person={
    name:'adnan',
    age:21,
    location:'Ambari,dinajpur',
    sayHello(){
        console.log('Hello world');
    },
}
let addr='location';
console.log(person[addr]);

calculator object 
let calculator={
    sum:function(num1,num2){
        return num1+num2;
    },
    minus:function(num1,num2){
        return num1-num2;
    },
    multiply:function(num1,num2){
        return num*num2;
    },
    division:function(num1,num2){
        return num1/num2;
    },
}
console.log(calculator.sum(10,10));

//accessing action with multiple object:
let person={
    name:'adnan',
    age:21,
    add:{
        zilla:'Dinajpur',
        upzilla:'parbatipur',
        village:'kurial',
    },
}
console.log(person.add.zilla);

//accessing single value in object:
let person={
    name:'adnan',
    age:21,
    location:'Dhaka',
    sayHello(){
        console.log('Hello');
    },
}
for(element in person){
    console.log(person[element]);
}

//This keyword in js object;
let person={
    name:'adnan',
    age:20,
    sayHello(){
        console.log('Hello',this.name);
    },
}
person.sayHello();

//this keyword in function
function sayHello(){
    console.log(this);
}
sayHello();

//javascript this keyword
let person={
    name:'adnan',
    age:21,
    interest:['js','php','python'],
    sayHello(){
        console.log('Hello world');
    },
    showInterest(){
        this.interest.forEach(function(el){
            console.log(el,this.name);
        },this)
    }
}
person.showInterest();