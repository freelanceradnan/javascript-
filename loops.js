// //javascript loops
//using for loops for(print 1 to 100):
for(let i=0;i<=10;i++){
    console.log(i);
}

//using for loops(print 100 to 1):
for(i=100;i>=0;i--){
    console.log(i);
}

//global schope in javascript:
let i=1;
for(i;i<=10;i++){
    console.log(i);
}
console.log('i:'+i);

// //while loops in javascript
let i=10;
while(i>=0){
 console.log(i);
 i--;
}

//global schope in javascript:
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log('i:'+i);

//while loops in different condition:
let i=10;
while(i--){
    console.log(i);
}

//break statements in js
let i=10;
while(i--){
    if(i==5)break;
    console.log(i);
    
}

//do while loops in javascript
let age=17;
do{
    console.log(age);
}
while(age>=18){
    console.log(age);
}