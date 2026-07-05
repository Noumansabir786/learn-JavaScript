// object are singelton, constructer and litteras

// signelton and constructor are declered by
const mySobject= new Object()
console.log(mySobject);

//litteras object are decleared by
const mysymbol=Symbol("value") // declered before initilize the symbol in object
const myobject= {
    name:"nouman",
    age:"26",
    email:"noumansabirwm@gmail.com",
    [mysymbol]:"Symbol value"
}
console.log(myobject) // return complete object with key and value
console.log(myobject.email); // retun email
console.log(myobject["email"]); // when this [] use then key must be enter as string ""

// freeze the object
//Object.freeze(myobject)


myobject.greating= function(){
    console.log("greating function log");
    
}
console.log(myobject.greating());

const allkeys=Object.keys(myobject)
Object.values(myobject)
Object.entries(myobject)
// console.log(Object.values(myobject));

// object de structure
 
const course= {
    name: "Java Script",
    instructure:"Hitash Chaudhary",
    learnForm:"YouTube",
    fee: 999
}

//normal way to get data
console.log(course.instructure);

//object de structure calling
// is main leanForm object ke key a agai  or appName uska variable type ban gya.
const {learnForm}=course
const {learnForm: appNmae}=course
console.log("de structure",appNmae);








