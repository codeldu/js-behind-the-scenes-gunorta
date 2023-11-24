// 'use strict'

// const first = function(){

//     const second = 2;
    
//     if (second===2){
//         function finalFunc(){
//             return "I GET IT"
//         }
        

     
//     }
   
//     console.log(finalFunc());
  


// }

// first();


// a = 5;

// console.log(a);

//execution content vs call stack
// exc : variable environment , scope chain, this keyword
// var-env : let-const-var, arguments object, functions 
//global

// let a = 5;

// let first = function(){
//     let b = 6;
//     console.log(a);
//     let c = second ();
//     let d = "Sagol"
//     if (b>5){
//         var e = "salam";
       
        
//     }
//     console.log("check_var", e);
//     // console.log("real" , d);
   
//     return a+b+c;
// }

// // console.log(c);

// let second =function(){
//     return 8;
// }

// console.log(first());


/// JS Scopes : Global, functional, local.

// Hoisting







// function showMessage() {
//     return "Privet"
// }

// var showMessage = () => {
//     return "Privet"
// }

// console.log(showMessage());


// a = 5 ;

// console.log(a);

// var a;


// let myName = "Huseynagha" ;

// console.log(window);


// let numberOfProducts = 10;

// if(!numberOfProducts){
//     emptyCart();
// }



// function emptyCart(){
//     console.log("Card is empty now");
// }

// let sum = 1600;


// let percent;

// if (sum>1000){
//     percent = 2;
// }else{
//     percent = 1;
// }


// console.log(percent*100);

// function myFunc(a,b){

//     console.log(arguments[]);
//     return a*b;
// }

// console.log(myFunc(5,6));


//this

//objectlerin ichinde istifade edilir adeten
//eventlerde de istifade olunur...

// var birthDate = 2003;

// const person = {
//     name : "Huseynagha",
//     birthDate : 1999,
//     getAge : ()=>{
//         console.log(this.birthDate);

//         // let that = this;

//         // const testFunction = () => {
//         //     console.log(this.name);
//         // }

//         // testFunction();
//     }
// }

// person.getAge();

// console.log(person.getAge())

// const testFunc = function(){
//     console.log(this);
// }

// const testArrow = () => {
//     console.log(this);
// }

// person.func = testFunc;


// testArrow();
// person.func();

// let birthDate = 1999;

// const getAge = function(){
//     return 2023-birthDate;
// } 


// console.log(getAge());

// let firstDiv = document.querySelector('.first');
// let secondDiv = document.querySelector('.second');

// let makeRed = function(){
  
//         if (this.style.backgroundColor !== 'red'){
//             this.style.backgroundColor ='red'
//         }else{
//             this.style.backgroundColor = ''
//         }
// }

// firstDiv.addEventListener('click', makeRed);
// secondDiv.addEventListener('click', makeRed)


// let myNewFunction = (a,b) =>{
//     console.log(arguments);
//     return a*b;

// }

// console.log(myNewFunction(6,7));


// let myName = "Huseynagha";
// let yourName = myName;
// myName = "Samir";

// console.log(myName, yourName);


// const me = {
//     firstname : "Huseynagha",
//     friends : ['Fatime', 'Sara', 'Nail']
// }

// const you = {...me} //shallow copy

// const you = JSON.parse(JSON.stringify(me)) //deep copy

// console.log(me);
// console.log(you);







