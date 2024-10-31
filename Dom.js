// /////////////////////////////// window object /////////////////////////
// the window object repersants an open window in a browser . it is browser's
// object(not java script's) & is autometically created by browser.

// it is a global object with lots of properties & methods.



// //////////////////////////// DOM /////////////////////////////
// when a web page is loaded , the browser creats a Document Object Model (DOM)
// of the page.


// console.dir() ==== it prints methods and properties of special objects like document.


// //////////////////////////////////// DOM Manipulation /////////////////
// tagName: returns tag for element nodes;
//innerText : returns the text content of the elemnt and all its childern.
//innerHTML : returns the plain text or HTML content in the element.
//textContent: returns textual content even hidden elemnt.
// firstChild: first ..
//lastChild: last...


///////////////////////////////// attributes /////////////////////////
// getAttribute(attr) . // to get attribute value, id, class name, etc.
//setAttribute(attr.value). // to set attr value // classList.add("newcl");
// p.setAttribute(class1, clas2) 
// node.style.  // div.style.backgroundColor = "red";


// let dives = document.querySelall("div");
// dives[0].innerText = 'jjio';




// for(dive of dives){

//  div.innerText = '';
 
// };






// /////////////////////////// insert new ///////////////////////////////////
// let heading = document.createElement("h1");
// heading.innerHtml = "<i> im new </>";
// document.querySelector("body").prepend(heading);
// node.append(el) //adds at the end of node (inside);
// Node.prepend(el) //adds at the start of node (inside);
//node.before(el) //adds before the node (outside);
// node.after(el)  //adds after the node (outside);



// //////////////////////////////// DELETE EL /////////////////////////

// node.remove() //removes the node. 
// let pera = document.querySelector("p");
// pera.remove();