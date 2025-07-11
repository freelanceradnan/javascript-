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

//solve fizz and buzz problems with if and if else (print 1-100 ,if i%3==0 then print fizz and if i%5==0 then print buzz and when i%3==0&&i%3==0 then fizzbuzz);

for(let i=0;i<=100;i++){
    if(i%3==0&&i%5==0){
        console.log('fizzbuzz');
    }
    else if(i%5==0){
        console.log('Buzz');
    }
    else if(i%3==0){
        console.log('fizz');
    }
    else{
        console.log(i);
    }
}

//javascript default day counter with days name:
let day=new Date().getDay();
if(day==0){
    console.log('Sunday');
}
else if(day==1){
    console.log('Monday');
}
else if(day==2){
    console.log('Tuesday');
}
else if(day==3){
    console.log('Wednesday');
}
else if(day==4){
    console.log('thursday');
}
else if(day==5){
    console.log('friday');
}
else{
    console.log('saturday');
}

//javascript date with switch statement 
let day=new Date().getDay();
switch(day){
    case 0:
    console.log('Sunday');
    break;
    case 1:
    console.log('Monday');
    break;
    case 2:
    console.log('Tuesday');
    break;
    case 3:
    console.log('Wednesday');
    break;
    case 4:
    console.log('thursday');
    break;
    case 5:
    console.log('Friday');
    break;
    default:
    console.log('saturday');
    
}