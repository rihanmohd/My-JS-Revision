// creat Element

// creat a div
let newDiv = document.createElement('div');



// Add class
newDiv.className = 'hello';


// Add Id
newDiv.id = 'hello1';



// Add attr
newDiv.setAttribute('title', 'hello Div');



// creat text node
let newDivText = document.createTextNode('hello world');


// Add text to div
newDiv.appendChild(newDivText);


// Add to Dom
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
newDiv.style.color = 'red';
container.insertBefore(newDiv, h1);
console.log(newDiv);