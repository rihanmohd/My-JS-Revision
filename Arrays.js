//  Array is a collection of items for releted informetions. (linear).


//2: type of array will come object, we can say it is a object of values only.


// 3: indices >> the values of array are stored in a linear fasion,
// means that sigle line fasion.





///////////////////// change array's value /////////////////////

// array is mutable in js , so we can this =>>>  // arr[0] = 23;








////////////////////////////   loops  //////////////////////////////
// we can use for, for of, for in,but we prefer for of loop for array,


for( i of arr){
    console.log(i.toUpperCase());
};





// ques // for a given array with marks of students ..., find the 
// average marks of the entire class.
let marks  = [22,33,44,55,66,7];
let sum = 0;
for(i of marks){
   sum+=  i;
};
let avg = sum / marks;
console.log(avg);




// ques 2 // for a given array with prices of 5 items [250, 640,400, 50]
// all items have an offer of 10% OFF on them, change the array to store final
// price after applying offer.

let arr = [250, 640,400, 50];

let i = 0;
for(value of arr){

    console.log(`value at index  ${i} = ${value}`);
    let offer = value / 10;
    arr[i] = arr[i] - offer;

    console.log(`value after offer = ${arr[i]}`);
    i++;
    
};



// using for loop,
for(i=0; i< arr.length; i++){
    let offer = arr[i] / 10;
    arr[i] -= offer;
}

console.log(arr);









////////////////////////////// Array  Methods //////////////////////

// 1. push() : add to end;
// 2. pop() : delete from end & return;
// 3. toString() : converts array to String; // returns new str.
// 4. concat() : joins multipls arrays & returns XPathResult.
// 5. unshift() : add to start .
// 6. shift() : delete from start & return.
// 7. slice(str,end) : returns a piece of the Array. 
// 8. splice(str, delcount, newel) : change original array (add,remove,replace)
