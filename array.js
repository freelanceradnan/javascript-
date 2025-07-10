//javascript array

//javascript array and accessing
let array=['adnan','shaharia','shaharia',25];
console.log(array[3]);
let array=['adnan','shaharia','mahim',25];
console.log(array);

//adding value in array:(in last)

let array=['adnan','shaharia','mahim',20];
array[array.length]='no';
console.log(array);

//access array value number:
let array=['adnan','shaharia','mahim'];
console.log(array.length);//array value number count


//access array point of index number:
let array=['adnan','shaharia','mahim',29];

console.log(array.length-1);

//adding value in array (last) with push()method
let array=['adnan','shaharia','mahim',20];
array.push('dhonia');
console.log(array);

//deleting value from last in js(pop)methods:
let array=['legend','never','die','52'];
array.pop();
console.log(array);

//adding value in array first(unshift):
let array=['adnan','shaharia','mahim',20];
array.unshift('myname');
console.log(array);

//delete value in array(shift):
let array=['adnan','shaharia','mahim',20];
array.shift();
console.log(array);

//uppercase in array
let str='Hello World';
console.log(str.toUpperCase());

//printing single value from array with for loops:
let str=['bangladesh','is','a','development','country'];
for(i=0;i<str.length;i++){
    console.log(str[i]);
}

//replace array value with for loops:
let array=['amar','sonar','bangladesh','ami','tomake','valobashi'];
for(i=0;i<array.length;i++){
    array[i]='array missing';
}
console.log(array);

//adding value in array element with(push) and create a new array

let array=['mahim','shakib','ridoy','nahid'];
let newArray=[];
for(let i=0;i<array.length;i++){
    newArray.push('mr'+array[i]);
}
console.log(newArray);

//making double number with array element number using for loop and push methods
let num=[1,2,3,4,5,6,7,8];
let newNum=[];
for(let i=0;i<num.length;i++){
    newNum.push(num[i]*2);
}
console.log(newNum);