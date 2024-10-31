// Events

// let button = document.getElementById('button').addEventListener('click',buttonClick
// );

// function buttonClick(e){
    // console.log("btn clicked");

    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor = 'red';


    // console.log(e);

    // console.log(e.target);  //it gives elm cliked.
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    //  let output = document.querySelector('.output');
    //  output.innerHTML = `<h3>`+ e.target.id +` </h3>`;


    //  console.log(e.type);



    // console.log(e.clientX);
    // console.log(e.clientY);


    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// };






// DEFF EVENTS
// let output = document.querySelector('.output');
// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent); 

// box.addEventListener('mouseenter', runEvent);  // for inner elm.
// box.addEventListener('mouseleave', runEvent);


// box.addEventListener('mouseover', runEvent); // for inner elm.
// box.addEventListener('mouseout', runEvent);


// box.addEventListener('mousemove', runEvent);


let itemInput = document.querySelector("input[type='text']");
let form = document.querySelector("form");


// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keypress',runEvent);



// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);



// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);


// itemInput.addEventListener('input',runEvent);


// let select = document.querySelector('select');
// select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);
function runEvent (e){
    e.preventDefault();
    console.log('Event type:', e.type);
    // document.body.style.display = 'none';

    console.log(e.target.value); //to get input's value
    document.querySelector('.output').innerHTML = `<h3> ok: ${ e.target.value} </h3>`;


    //  output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3>
    // <h3>MouseY: ${e.offsetY} </h3>`;

    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 30)";

}