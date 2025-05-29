const results = document.querySelector("#title");
console.log(results.innerText);
document.getElementById("title").innerText = "welcome to javascript"
//document.querySelector("button").setAttribute("disabled", true);
//document.querySelector("#title").style.color = "blue"
document.querySelector(".di").style.padding = "100px"
document.querySelector(".di").style.display = "inline"
//document.querySelector("h2").style.fontsize = "20px"
//function btn() { document.querySelector("#title").innerText = "Hello Usama"
//};
//const button = document.querySelector("button")
//const text = document.querySelector("#title")
//button.addEventListener("click", function(){ 
 // alert("button was clicked")
 // title.innerText = "welcome Username"
  // title.style.color = "green"
 // const message = document.createElement("button"); // to add new element
 // message.innerText = "Registration Successful";
 // document.body.appendChild(message)
  //message.style.color = "red"
 //});
// const button = document.querySelector(".btn")
// const text = document.querySelector("#title")
// button.addEventListener("click", function(){
 // text.remove();
 // });
 // const product = document.querySelector(".btn")
 // product.addEventListener("click", function(){
 // const cart = document.createElement("p")
 // cart.innerText = "Add to cart";
 // document.body.appendChild(cart);
 //});

const input = document.querySelector("input");
const button = document.querySelector(".btn");
input.addEventListener("click", function(){
const inputValue = input.value;
alert(inputValue);;
});
