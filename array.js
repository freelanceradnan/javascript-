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