//  loops are used to execute a piece of code again & again


// for loop
let sum = 0;
for(i = 1; i<=5; i++){
    sum = sum + i;
   
};




// while loop
let i = 0;
while(i<= 5){
    //do some work
    i++;
};



// ques
let gamenum = 25;
let user = prompt("Guess the game number :  ");

while(user != gamenum){
    user = prompt("you entered wrong num , Guess again");
}

console.log("congratulation you entered the right num");






// do while loop // it will run once time necessary.
let j = 0;
do {
    // do some work
    j++;

} while (j <=5);







// for of loop // it is for strings and arrays.
let str = "rihan";
let size = 0;
for(i of str){
    // do some work
    size++;
};
console.log(size);







// for in loop   // it is for objects & arrays.

let obj = {
    name: "a",
    age: 66,
    isPass: true,
};

for( i in obj){
    // do some work;
    console.log(i) // it will return keys. for value obj[i];
}



