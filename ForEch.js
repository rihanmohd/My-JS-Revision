// //////////////////////////// forEch //////////////////////////////////////////////
// aar.forEch(callbackFunc);


// callback fuction : here it is a function to execute for each element in the array.

// a callback is a function passed as an argument to another function.



arr.forEach(function printVal(val) {  //value at  each idx,

    console.log(val);
});




// arrow func
arr.forEach((val, idx, arr) => {

    //do some work
    
});





// ques get square
let nums = [1,2,3,4,5];

nums.forEach((num) =>{

    console.log(num * num);  // num **2;

});




// ////////////////////////////// Higher order functions or Methods ///////////////////////////////////

// those functions that take other functions as a parameter, or return functions as a value.






// ///////////////////////////////////// Map ///////////////////////////////////////
// creates a new array with the result of some operation. the value its callback returns are
// used to form new array.



let newArr = arr.map(( val) => {

    return val * val;
//    do some work

    });

    console.log(newArr);








// ///////////////////////////////////////// Filter /////////////////////////////////////
// creates a new array of elements that give true for a condition/filter
// Eg: all even elements

let newAr = arr.filter((val) => {

    return val %2 ===0;

});






// ////////////////////////////////////// Reduce ///////////////////////////////////////
// performes some oparetions & reduce the array to a single value . it returns that sinhle value.

let arr1 = [1,2,3,4];
let initailValue = 0;
let sumWithInitailVal = arr1.reduce((result, currentVal) => result + currentVal, initailValue);



// result == 1,, currentVal === 2, for the first  time. then result will store both.
console.log(sumWithInitailVal); // 10.






// largest in array
let arrr = [1,2,3,4];

let output = arrr.reduce((prev, curr) => {

    return prev > curr ? prev : curr;
});

console.log(output);





// ques we are given array of marks os students. filter out of the merks of students that scored 90+,
// 

let marks = [55,77,99,65];

let toppers = marks.filter((val) =>{

    return val > 90;

});




// ques take a number n as input from user. creat an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in the array.

let n = prompt("enter a number :");

let ar = [];

for(i=1; i<=n; i++){

    ar[i-1] = i;

};

let sum = ar.reduce((prev, curr) => {
    return prev + curr;

});


let factorial = ar.reduce((prev, curr) => {
    return prev * curr;

});
