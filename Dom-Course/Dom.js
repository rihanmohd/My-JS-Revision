// EXAMIN THE DOCUMENT OBJECT//
console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "12343";

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = "Hello";

console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);





// get Element by ID

console.log(document.getElementById("main-header"));
let header = document.getElementById("header-title");
let header2 = document.getElementById('main-header');
header.textContent = 'hello';
header.innerText = 'working';
header.innerHTML = `<h4>hello</h4>`

// deff between
console.log(header.textContent);
console.log(header.innerText);
console.log(header.innerHTML);
header2.style.borderBottom = 'solid 3px blue';






// get Element by ClassName

let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';


// // gives error
items.style.backgroundColor = '#f4f4f4';  //it is not working bec it is html collection, we can do this by loop.

for(i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}








// get element by tag name


let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';


// gives error
li.style.backgroundColor = '#f4f4f4';  //it is not working bec it is html collection, we can do this by loop.

for(i=0; i<li.length; i++){
   li[i].style.backgroundColor = '#f4f4f4';
}










// query selector
let header = document.querySelector('#main-header');
// console.log(header)
header.style.borderBottom = 'solid 4px #ccc';


let input = document.querySelector('input');
input.value = 'hello world';


let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';


let item = document.querySelector('.list-group-item');
item.style.color = 'red';



let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';


let secondtItem = document.querySelector('.list-group-item:nth-child(2)');
secondtItem.style.color = 'blue';




// query selectorAll
let titles = document.querySelectorAll('.title');
console.log(titles[0]);
titles[0].textContent = 'hello';



let odd = document.querySelectorAll('li:nth-child(odd)');

let even = document.querySelectorAll('li:nth-child(even)');

 for(i=0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';

 }





