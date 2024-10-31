// //////////////////////// Fetch Api ////////////////////////////
// The Fetch Api provides an interface for fetching (sending/receving)
// resources.

// it uses Request and Response objects.

// The fetch() method is used to fetch a resource (data).

// let promise = fetch(url,[options]);



// exmp
const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.getElementById("fact");
const btn  = document.querySelector("button");

// const getFacts = async ()=>{
//     console.log("getting data...")
//     let response = await fetch(url);
//      console.log(response);
//     //  console.log(response.status);
//     let data = await response.json();
//     // console.log(data[0].text);
//     factPara.innerText = data[2].text;
// }
// // getFacts();
// btn.addEventListener("click", getFacts);




// by promise chain same work  // it is not good & easy,
function getFacts(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })

    .then((data)=>{
        console.log(data);
        factPara.innerText = data[2].text;
    })
}
btn.addEventListener("click", getFacts);





// /////////////////// Understanding Terms ///////////////////////////////// //

// AJAX is Asynchronous JS & XML;
// JSON is javascript object Notation;

// JSON() method : returns a second promise that resolves with the result
// of parsing the response body text as JSON. (input is JSON, output is JS object);




// ////////////////////////// Requests & Response ///////////////////////

// HTTP Verbs  //Hyper Text Transfer Protocol.   //get,delete,post etc.
// Response Status Code

// *Note: HTTP response headers also contain details about the
// response, such as content type, HTTP status code etc.
