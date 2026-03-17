// dom = body

//html se document select karna
//text badalna
//html badalna
//css badalna
// attribute
// event listeners


//1 Slecting elemets --------------->

// let a = document.getElementById("abc")

// let a =document.getElementsByClassName("xyz");

// let a = document.querySelector("h1")

// let a = document.querySelectorAll("h1")

// console.log(a) /// try console.dir(a)  ---> if not opening


//=======================================Changing HTML text==================

//let h1 = document.querySelector("h1");

//console.dir(h1);

//h1.textContent = "Hello Vikrant kaise ho"

//h1.innerHTML= ("<u>Using Html inner html to manipulate DOM </u>")

//textContent & innerText is same but inner.HTML is used to add html tag using js in Dom

//=======attribute========>

let a = document.querySelector("a")

console.dir(a) // by default if href is not defined it will take local host url by default

//a.href= "https://www.google.com";

// a.setAttribute("href", "https://www.google.com");

// a.removeAttribute("href")

// let img= document.querySelector("img");

// img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1772591032220-140b63612d67?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")


// console.log(img.getAttribute("src"));


//==================Dynamic DOM Manipulation==========================>

// create element
// append/prepend karo jaha bhi element chahiye waha

let h1 = document.createElement("h1")

h1.textContent ="Hello ji kaise hu aap"

console.log(h1)

document.querySelector("body").append(h1)  //----------------> Add html tag at the end of body tag after script

document.querySelector("body").prepend(h1) //------------> Add html tag in starting of body

//=============Remove Eelemnt using JS=========

let h2 =document.createElement("h1");

h2.textContent = "this is another h1 added using JS";

document.querySelector("div").appendChild(h2)

//==========will  remove h1 element from body



