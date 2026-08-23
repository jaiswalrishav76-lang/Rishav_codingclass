//scope means visibility or accessbility
//it determines the assebility or visibility of variables
//javascript variable has three types of scope
//global scope , functional scope and block scope
//globally disclared variable have global scope 
//global variables can be accessed from anywhere in java script program
//all variable scope seem similar when they are declared outside of block
var x = 1 //global scope
let y = 5// global scope
const z = 2// global scope

var bikeName = "yamaha"
function giraffe(){
    console.log("bikeName",bikeName)
    console.log("data",data)//undefined
    //console.log("datatype15",dataType)it cannot be accessed
    //console.log("carname 5 ",carName)undefined //cannot be accessed before initialization
} 
giraffe()
let carName = "toyota"
function rishav(){
    console.log("carName:",carName)
    console.log("bikeName20",bikeName)
    // console.log("datatype",dataType)it cannot be accessed before initialization
}
rishav()
const dataType = "integer"
var data = "string"
function harsh(){
    console.log("datatype=",dataType)
    console.log("carname26",carName)
    console.log("bikename",bikeName)
}
harsh()
// function scope 
function yellow(){
    let tree = "green"
    console.log("tree :",tree)
}
yellow()

//hoisting
