const user={
    name:"Nouman",
    price: 1000,

    welcomeMessage:function(){
        console.log(`${this.name} , welcome to website`);
    }
}
user.welcomeMessage();
user.name="Fahad bin Uzair"
user.welcomeMessage();

//arrow function
const chai= (num1, num2) => {
    return num1+ num2
}

console.log(chai(10,25));

//explict arrow function
const add2=(num1, num2) => (num1+num2)

console.log(add2(100,250))

//return object
const add3=(num1, num2) => ({name:"Nouman"})

console.log(add3("return object",100,250))