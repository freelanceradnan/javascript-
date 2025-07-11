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

//if and if else statements with order:
let age=41;
if (age>=18){
    if(age>90){
        console.log('are you alive bro?');
    }
    else if(age>80){
        console.log('you are oldest');
    }
    else if(age>70){
        console.log('you are older');
    }
    else if(age>60){
        console.log('you are became old');
    }
    else if(age>50){
        console.log('you are now old');
    }
    else if(age>40){
        console.log('you are youngest');
    }
  
    }
      else{
        console.log('you are young');
    }

//print event num with array;
let num=[1,2,3,4,5,6,7,8,9,10];
let evenNums=[];
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
      evenNums.push(num[i]);
    }
}
console.log(evenNums);

//choose less then age 30 person in js;
let person=[
    ['adnan','it bd',28],
    ['shakib','dinajpur it',33],
    ['tamim','dinajpur',35],
    ['ridoy','piragang',25],
];
let lessThen30=[];
for(i=0;i<person.length;i++){
    if(person[i][2]<30){
        lessThen30.push(person[i]);
    }
}
console.log(lessThen30);