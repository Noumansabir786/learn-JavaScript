function myfunction(){
    console.log("simple function calling");
}
//myfunction();

function functionwithPermeter(num1,num2){
    console.log(typeof num1);
    
    if(typeof num1 == "number" && typeof num2 == "number"){
        let add= num1+num2
        return add
    }
    else{
        console.log("Not a valid Number")
    }

}

const addResult=functionwithPermeter(89,"11")
console.log("Addition result",addResult);

function loginUser(user){
    console.log(`welcome ${user} to our Dashboard`);
    
}
loginUser("Nouman Bin Sabir")

//cart main jab user multiple peramter pass karny hun or hm ko pta na ho k kitny perameter pass karny hain 
//function ko to us time rest use karty hain jo k array return karta ha.
//rest k liye ... use hoty hain.

function cartItems(...num1){
    console.log("cart Items",num1);
}
cartItems(200,500,800,900)

const myArray=[200,500,800, "nouman"]
function valueAtArrayIndex(arrayData){
    let size=arrayData.length;
    let value=arrayData[size-1]
    return value
}

console.log(valueAtArrayIndex(myArray));

const myInfo= {
name:"Nouman",
age:"30",
eduction:"BSCS"
}
function myInfoFunc(info){
    console.log("object info",info.eduction);
}
myInfoFunc(myInfo)