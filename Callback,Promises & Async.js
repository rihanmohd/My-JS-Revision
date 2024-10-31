// ////////////////////////////////////// Callbak Promise Async /////////////////////////////////
           
//  ///////////////////////////////////////// Synchronous //////////////////////////////////
// Synchronous means the code runs in a particular saquence of instructions given in the 
// program.    Each instruction waita for the prevous instruction to complete its execution.






//////////////////////////////////////// Asynchronous ///////////////////////////////////
// Due to synchronous programing, somtimes imp instructions get blocked due to some previoius
// instructions, which causes a delay in the UI.  Asynchronous code execution allows to execute 
// next instructions immedietly and does'nt block the flow.


// exmp
// function hello(){
//     console.log("hello");

// }
// setTimeout(hello, 2000);  //timeout ; 


// // by arrow func
// console.log("1");
// console.log("2");

// setTimeout(() => {
//     console.log("hello");
// }, 4000) ; //timeOut.


// console.log("3");
// console.log("4");








// ////////////////////////////////////////////// Callback ///////////////////////////////
//  A callback is a function passed as an argument to another function .


// exmp
function sum(a,b){
    // console.log(a+b);

}


function calculat(a,b, sumCallback){

    sumCallback(a,b);
}

calculat(1,3, sum);



// we can do like this
calculat(2,3, (a,b) => {

    // console.log(a+b);

});











// /////////////////////////////////// Callback Hell  /////////////////////////////

//  Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.

// (pyramid of Doom)

// This style of programing becomes difficult to understand & manage.



// callback Hell

// function getData(dataId, getNextData){
//      //2s

//     setTimeout(() =>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();

//         } 
//     }, 2000);

// }

// getData(1,()=>{
//     console.log("getting data2...");
//         getData(2,() => {
//     console.log("getting data3.....");
//             getData(3, ()=>{
//     console.log("getting data4 ......");
//                 getData(4);
//             });
//         });
//     });










// //////////////////////////////////// Promises  ////////////////////////////////
// Promise is for "evantual" completion of task. it is an object in js.
// it is a solution to callback hell.

// let Promis = new Promise((resolve, reject) =>{
//     console.log("i am a promise");
    // resolve(1234);
    // reject("some error got");

// }); 

// console.log(Promis);

// *note : resolve & reject are callbacks provided by JS.




// exmp
// function getData(dataId, getNextData){
//           return new Promise((resolve, reject) =>{

//             setTimeout(() =>{
//                 console.log("data", dataId);
//                 resolve("success");
//                 if(getNextData){
//                     getNextData();
        
//                 } 
//             }, 5000);

//           });
    
//     };

//     let rsult = getData(123);
//    console.log(rsult);





//    promisess
// A java script promise object can be:
// . pending: the result is undefind. 
// . Resolved:  the result is a value (fulfiled). // resolve(result).
// . Rejected:  the result is an error object.    // reject(error).




// *Note: Promise has state (pending, fulfilled) & some result (result for 
// resolve & error for object).


  




// ///////////////////////////////////////// PROMISES /////////////////////////////

// .then()  & .catch()  

// Promise.then((res) => {});
// Promise.catch((error)=>{});






// expm
// const prom = getPromis = () =>{

//    return new Promise((resolve, reject) =>{
//         console.log("i am a promise");
//         // resolve("succes");

//         reject("technical error");
        
//     }); 
// };

// let promm = getPromis();

// promm.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promm.catch((err)=>{
//     console.log("rejected", err);
// });










// ///////////////////////////////// Promise Chain ////////////////////////////////

// Exmp
// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("succes");

//         }, 3000);
//     });
// }



// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data2");
//             resolve("succes");

//         }, 3000);
//     });
// }

// console.log("fectching data1....");
// let p1 = asyncFunc1();

// p1.then((res)=>{

//     // console.log(res);

//     console.log("feching data2 .....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{

//         // console.log(res);
//     })
// });


// we can do like this 
// console.log("fectching data1....");
//  asyncFunc1().then((res)=>{
//     console.log("feching data2 .....");
//     asyncFunc2().then((res)=>{
//     })
// });







// ////////////////////// callback hel solved by promise /////////////////////////

//     function getData(dataId){
//         return new Promise((resolve, reject) =>{

//             setTimeout(() =>{
//                 console.log("data", dataId);
//                 resolve("succes");

//             }, 1000);

//         });
//     };


//     // promise chain

//    getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
//    });


//    we write it like below for good way
//      getData(1)
//     .then((res) =>{
//    return getData(2);
//    })
//    .then((res)=>{

//     return getData(3);
//    })
//    .then((res)=>{
//     console.log(res);

//    });










// ////////////////////////////// Asynch- Await ////////////////////////////////

// async function always returns a promise.

async function name(params) {
    
};


// await pauses the execution of its surrounding async function until the promise 
// is setteled.



// exmp
async function hello(params) {
    console.log("hello");
}
hello();  // it returns a promise autometically although we didn't definde till now anywhere.





// await  expm
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            console.log("whether data");
            resolve("200");
        }, 2000);
    });
}

async function getWhetherData() {
    await api();  // 1st 
    await api();  // 2nd
    
}

// getWhetherData();





//////////////////////////////////////// Promise solved by Async Await  /////////////////
function getData(dataId){
            return new Promise((resolve, reject) =>{
    
                setTimeout(() =>{
                    console.log("data", dataId);
                    resolve("succes");
    
                }, 2000);
    
            });
        };

// Async-Await

// async function getAllData() {
//     console.log("getting Data1....")
//     await getData(1);
//     console.log("getting Data2....")
//     await getData(2);
//     console.log("getting Data3....")
//     await getData(3);
//     console.log("getting Data4....")
//     await getData(4);
//     console.log("getting Data5....")
//     await getData(5);
//     console.log("getting Data6....")
//     await getData(6);
// };

// getAllData();




// ///////// IIFE: Immediately Invoked Function  Expression //////////////////
// IIFE is a function that is called immediately as soon as it is defined.

// in this we do not need to call func like above, but we can'tuse it again ,
// for this we will copy it .

(async function getAllData() {
    console.log("getting Data1....")
    await getData(1);
    console.log("getting Data2....")
    await getData(2);
    console.log("getting Data3....")
    await getData(3);
    console.log("getting Data4....")
    await getData(4);
    console.log("getting Data5....")
    await getData(5);
    console.log("getting Data6....")
    await getData(6);
})();












/////////// comarision between callback hell, promise chain, Async await ///////////////



// callback hell

// getData(1,()=>{
//     console.log("getting data2...");
//         getData(2,() => {
//     console.log("getting data3.....");
//             getData(3, ()=>{
//     console.log("getting data4 ......");
//                 getData(4);
//             });
//         });
//     });




    // promise chain

    // console.log("getting data1......");
    // getData(1)
    //     .then((res) =>{
    //         console.log("getting data2......");
    //    return getData(2);
    //    })
    //    .then((res)=>{
    //     console.log("getting data3......");
    //     return getData(3);
    //    })
    //    .then((res)=>{
    //     console.log(res);
    
    //    });
    
    

    //    Async await

    // async function getAllData() {
    //     console.log("getting Data1....")
    //     await getData(1);
    //     console.log("getting Data2....")
    //     await getData(2);
    //     console.log("getting Data3....")
    //     await getData(3);
    //     console.log("getting Data4....")
    //     await getData(4);
    //     console.log("getting Data5....")
    //     await getData(5);
    //     console.log("getting Data6....")
    //     await getData(6);
    // };