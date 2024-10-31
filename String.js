// string is a sequence of characters used to represent text.
 let str = "javascript";
 console.log(str[0]) //j.



//  //////////////////  change str's value //////////////////
str[0] = "y"; // it won't change any thing because strings are immutable unlike array in js.


//  if we want to change we can use replace method .. console.log(str.replace("h", "y"));


// /////////////////////////  Template literals in js  ///////////////////
//  A way to have embedded expressions in strings

`this is a template literal`;




///////////////////////////  string interpolation  ///////////////////
// to creat string by doing substitution of placeholders

`string text ${expression} string text`;






// ////////////////////escape characters in string ////////////////////
// it takes one word's length only.
console.log("java \n script"); // for next line;
console.log("java \t script");  // for tab space;







///////////////////////// string methods ////////////////////
// these are built in functions to manipulate a string ,
// these methods won't change original  str but return a new str,
//  because strings in js are immedible ,means wont change .


str.toUpperCase();
str.toLocaleLowerCase();
str.trim();  //removes whitespaces from start & end.
str.slice(start, end); //returnes part of string; 
str1.concat(str2); // join str2 with str1; //also can use + ;
str.replace(searchValue, newValue); // console.log(str.replace("h", "y"));
str.charAt(idx);  // console.log(str.charAt(2)); 





// ques
let fName = prompt("enter your full name without spaces");
let userName = "@" + fName + fName.length;
console.log(userName);