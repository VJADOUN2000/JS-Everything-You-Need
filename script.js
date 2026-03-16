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

let h1 = document.querySelector("h1");

console.dir(h1);

h1.textContent = "Hello Vikrant kaise ho"

h1.innerHTML= ("<u>Using Html inner html to manipulate DOM </u>")

//textContent & innerText is same but inner.HTML is used to add html tag using js in Dom

