let allItems = document.querySelectorAll(".list li");
let addContent = document.querySelector("#content");
let btnAdd = document.getElementById("btn");
let textAdd = document.getElementById("toAdd")
let price = 0;

allItems.forEach(function (e) {
    
    e.onclick = function () {
        
       price += parseInt(e.getAttribute("data-price"));

       addContent.innerHTML += e.textContent + "";

       if (addContent.innerHTML != "") {

        btnAdd.style.display="block";

       }
    }
})
btnAdd.onclick= function () {
    
    textAdd.innerHTML += price;
}

//////////////////////





// //first task 
// var x=prompt("enter  a valid number");
// document.getElementById("firstName").value=x;
/////////
//second one
// var y=prompt("enter a number");
// if (Number.isInteger(y/3&&y/4)) {
//     console.log("Yes");
// }else{
//     console.log("no");
// }
///third
// var y=prompt("enter a number1");
// var x=prompt("enter a number2");
// if (+y>+x) {
//    console.log("The max is",y); 
// }else if (+x>+y) {
//     console.log("The max is",x); 
// }else{
//     console.log("equal");
// }
//four
// var y=+prompt("enter a number");
// if (y>=0) {
//     console.log("y is a positive number");
// }else{
//     console.log("y is a negative number");
// }
//fifth
// var y=+prompt("enter a number");
// var x=+prompt("enter a number");
// var i=+prompt("enter a number");
// if (+y>+x&&+y>+i) {
//     console.log("max element",y);
// }else if(+x>+y&&+x>+i){
//     console.log("max element",x);
// }else{
//     console.log("max element",i);
// }
// if (+y<+x&&+y<+i) {
//     console.log("min element",y);
// }else if(+x<+y&&+x<+i){
//     console.log("min element",x);
// }else{
//     console.log("min element",i);
// }
//sixth method
// var x1=prompt("first number");
// var x2=prompt("second number");
// var x3=prompt("third number");
// var x4=prompt("fourth number");
// var x5=prompt("fifth number");
// // function calc(x1,x2,x3,x4,x5) {
//     var value= x1+x2+x3+x4+x5;
//     console.log(value);
//     console.log(value/5);
//     console.log((value/5)+"%");
// }
// calc(+x1,+x2,+x3,+x4,+x5);

// function calc(x1,x2,x3,x4,x5) {
//     return +x1+x2+x3+x4+x5
// }
// var total=calc(+x1,+x2,+x3,+x4,+x5);
// console.log(total);
// function  average(x) {
//     return total/5
// }
// console.log(average());
/////////13///////////////
// var x3=+prompt("number");
// if (x3>12||x3<=0) {
//     document.getElementById("dataToday").value="enter right month "
// }else{
    
//     if (x3==2) {
//         document.getElementById("dataToday").value="days 28";
//     }else if (x3==1||x3==7||x3==8||x3==4) {
//         document.getElementById("dataToday").value="days 31";
//     }else{
//         document.getElementById("dataToday").value="days 30";
//     }
// }
//////////////////14//////
// var x1=prompt("first number");
// var x2=prompt("second number");
// var x3=prompt("third number");
// var x4=prompt("fourth number");
// var x5=prompt("fifth number");
// if (x>=90) {
//     console.log(" 90%: Grad A");
// }else if (x>=80) {
//     console.log(" 80%: Grad B ");
// }
// else if (x>= 70) {
//     console.log(" 70%: Grad c ");
// }
// else if (x>=60) {
//     console.log(" 60%: Grad d ");
// }
// else  (x>=50) {
//     console.log(" 50%: Grad f ");
// }
////////////////
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
