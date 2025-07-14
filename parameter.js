//rest parameter
function add(num1,num2,...num){
    console.log(...num);
}
add(1,2,3,4,5,6);

//rest parameter (array type):
function add(...nums){
    console.log(nums);
}
add(2,3,4,5,6);

function add (...nums){
    let result=0;
    nums.forEach((el)=>{
        result +=el;
    });
    return result;
}
console.log(add(1,2,3,4,5));