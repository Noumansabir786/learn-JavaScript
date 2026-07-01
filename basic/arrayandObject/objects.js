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
console.log(Object.values(myobject));





