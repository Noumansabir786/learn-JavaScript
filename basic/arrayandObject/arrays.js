const myarr=new   Array(1,2,3,"nouman")
console.log("arr", myarr);

const myarr2= [1,2,3,4,5,"test", true]

//console.log(myarr);
//console.log(myarr2);

//array properties
myarr.unshift(9) // add number on the start of the array
console.log("unshift", myarr);

myarr.shift(9) //remove value from the start of the array
console.log("shift", myarr);

const checks=myarr.includes(10) // check value is included in array or not
console.log("incldue",checks);

const checkindexOf=myarr.indexOf(20) // check the vale index and return index if found otherwise return -1
console.log("indexOf",checkindexOf);

const myjoin=myarr.join() // conver arry into string with , sperated
console.log("join", myjoin);

const slicevalue= myarr.slice(0,3) // print value from 0 to 2 index and skip value at index 3 without modifing the orginal arry modern use pagination
console.log("slice",slicevalue);
console.log("arrq", myarr);

//print value from 0 to 2 index and skip 3rd index value and also modifing the orginal arry.
const splicevalue= myarr.splice(0,3)
console.log("splice value", splicevalue);
console.log("arr", myarr);

// marge 2 array
const arry3= myarr.concat(myarr2)
console.log("concate", arry3);

const arry4= [... myarr, ... myarr2] // best option to use to marge the arrays
console.log("saperd", arry4);

// flat convert sub arrays into 1 array and Infinity means how much depth sub array you want to convert into 1 array
const subeArrays=[1,2,3,[5,8],[2,8],[85,25]]
const subarryfunc=subeArrays.flat(Infinity)
console.log("flat Array",subarryfunc);


// convert variable into array.
let score=200
let score1=500
let score3= 600

const arrayofvariable=Array.of(score,score1,score3)
console.log("variable to array", arrayofvariable);


 






