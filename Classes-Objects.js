// /////////////////////////////////////////// Prototypes in js /////////////////////////////////////
// A java script object is an entity having and behavior (properties and method).

// Js objects have a special property called prototype.


// We can set protoptype using _ _ proto _ _.

let employy = {
    clactTax(){
        console.log("text rate is 10%")
    }
};

const karanArjun1 = {
    salary: 50000,
};

const karanArjun2 = {
    salary: 50000,
};

const karanArjun3 = {
    salary: 50000,
};


const karanArjun4 = {
    salary: 50000,
};

const karanArjun5 = {
    salary: 50000,
};

karanArjun1.__proto__ = employ;
karanArjun2.__proto__ = employ;
karanArjun3.__proto__ = employ;
karanArjun4.__proto__ = employ;

console.log(karanArjun1.clactTax());  // now we won't need to creat this clactText func for each employ,
// but by this way  this will appear in every employ' function as prototype and then we will clactTex.






/////////////////////////////////////// next /////////////////////////////////////////
// *note: if object & pprotoptype have same method, object's method will be used. 
let employyy = {
    clactTax(){
        console.log("text rate is 10%")
    }
};


const karanArjun = {
    salary: 50000,
    calactText(){
        console.log("taxw rate is 20%");  //may be deff employs have deff tax rate.
    },
};

karanArjun.__proto__ = employ;
console.log(karanArjun.calactText());   // it will print 20% tax Rate.






////////////////////////////////////// next //////////////////////////////////////////
//as below  both are applicable ways to creat functions in object.
let employ = {
    clactTax1(){
        console.log("text rate is 10%")
    },

    clactText2: function(){
        console.log("text rate is 10%")

    }
};






/////////////////////////////////// Classes in js ////////////////////////////////////////////

// Classes is a pragrame-code template for creating objects .
// those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass {

    constructor(){}

    myMethod(){}

}

let myObj = new MyClass();



// exmp
class ToyotaCar {
    start(){
        console.log("start");
    }
  
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();
// we can set brand for anyone.
fortuner.setBrand("fortuner");
console.log(fortuner.start());  // it will work for both.






// ///////////////////////////////////////// Constructor ///////////////////////////////
// constructor() method is: 
//  .automatically invoked by new   //    if we don't write const js itself will invoke this by new .
// . initialized object 


//exmp
class ToyotCar {
    constructor(brand, nileage){
        console.log("creating new object");
        this.brand = brand;
        this.nileage  = nileage
    }

    start(){
        console.log("start");
    }
  
    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brandName = brand;   ///now we don't need for this.
    // }
}

let fotuner = new ToyotaCar("fortuner, 10"); // we can pass parameters in constructor .
let lexs = new ToyotaCar();  // constructor.








// ///////////////////////////////////  Inheritance in js /////////////////////////////////
// inheritance is passing down properties & methods from parent class to child class.

class parent {

}

class child extends parent {

}

// *note: if child & parent have same method, child's method will be used. [Method Overriding].



//expm
class parent {
    hello(){
        console.log("hello");

    }
}

class child extends parent {};

let obj = new child();
console.log(obj.hello);  // it will work for it .





// exmp 2
class person {
    constructor(){
        this.species = "hono sepiens";

    }

    eat (){
        console.log("eat");

    }

    sleep() {
        console.log("sleep");
    }


    work() {
        console.log("do nothing");
    }
}

class Engineer extends person {
    work(){
        console.log("solve problums, build somthing")
    }
};

// let arjun = new Engineer();
console.log(arjun.eat);  // it will work for it .


class Doctor extends person {
    work(){
        console.log("treat pationts")
    }
};

let arjun = new Engineer();
console.log(arjun.eat);  // it will work for it .
console.log(arjun.work);  // there will invoke child work becouse it is child's func it is called overriding.









// ///////////////////////////////////////////////   SUPER KEYWORD /////////////////////////////////////////////
//  The super keyword is used to call the construvtor of its parent claas to access the parent's 
// prperties and methods.

super(args)  // calls parent's constructor

super.parentMethod(args);



// expm
class person {
    constructor(name){
        console.log("enter parent constructor");
        this.species = "hono sepiens";

        this.name = name;  // every person has a name.

    }

    eat (){
        console.log("eat");

    }
}

class Engineer extends person {
    constructor(name){
        console.log("enter child constructor");

        super(name); // to invoke parent class constructor.
        this.branch = branch;
        console.log("exit child constructor");

    }

    work(){
        super.eat();  // to call first this action.
        console.log("solve problums, build somthing")
    }
};

let EngObj = new Engineer("rahul");




// ques 1
// you are creating a website for your college. create a class User with 2 properties,
// name & email . it also has a method called viwData() that allows user to view website data.


let DATA = "some Info";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viwData(){
       console.log("data = " , DATA);
    }
}

// let stud = new User("ahmad", "ahmad@gmail.com");
// let stud2 = new User("aman", "aman@gmail.com");

// let teacher = new User("zaid", "zaid@gmail.com");
// console.log(stud);
// console.log(stud.viwData());





// ques 2
// creat a new class called Admin which inherits from User. Add a new method called editData to
//  Admin that allows it to edit website data.

class Admin extends User {
   constructor(name, email){

    super(name, email);  // when we creat constr in child cls we will call parent's constrctor.

   }

    editData(){
        DATA = "some updated value";

    }

}

let stud = new User("ahmad", "ahmad@gmail.com");
let stud2 = new User("aman", "aman@gmail.com");

let teacher = new User("zaid", "zaid@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com");
console.log(admin1);
console.log(DATA);
console.log(admin1.editData);
