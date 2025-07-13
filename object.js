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