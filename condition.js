//condition in js
//if condition//
let age=18;
let addr='Dhaka';
if(age>=18&&addr=='Dhaka'){
    console.log('you are right place!');
}

//if else condition in js
let age=10;
let addr='Dhaka';
if(age>=18&&addr=='Dhaka'){
    console.log('you are welcome');
}
else if(age){
    console.log('you are get out');
}

//if else condition with operator order(precedecy);
let age=18;
let addr='Dhakaa';
if(age<18&&age!='Dhaka'){
    console.log('you can not entered because age and address not matched!');
}
else if(age<18){
    console.log('you are not entered because age is not meet the requirement');
}
else if(age!='Dhaka'){
    console.log('you are not entered because address not match');
}
else if(age>=18&&addr=='Dhaka'){
    console.log('you are welcome!');
}