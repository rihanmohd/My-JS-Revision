let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
// console.log(filter)


// form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);



//Filter event
filter.addEventListener('keyup', filterItems);


// add item
function addItem(e){
    e.preventDefault();
   

    //Get input value
    let newItem = document.getElementById('item').value;
    
    //Creat new li Elements
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //creat del btn
    let deleteBtn = document.createElement('button');

    //Add classes to del btn
    deleteBtn.className = 'btn delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //append button to li 
    li.appendChild(deleteBtn);

    //append li to list
   itemList.appendChild(li);
}



//Remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
   if(confirm('Are you sur?')){
    let li = e.target.parentElement;
    // console.log(li)
    itemList.removeChild(li);
   }

   }

}




// Filter items
function filterItems(e){
    //converts text to lower case
    let text = e.target.value.toLowerCase();
    // console.log(text);


    //Get list
   let items =  itemList.getElementsByTagName('li');
   

   //convert to an array
   Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
     }else{
        item.style.display = 'none';
     }

   })
};