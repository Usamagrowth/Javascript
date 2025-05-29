const userEmail = document.getElementById("user-email");
const userName = document.getElementsByClassName('user-name');
const userDetails = document.querySelector(".user-details");

// create H1 element with the text Hello user
const h1 = document.getElementsByTagName("h1")
const h1s = document.querySelectorAll("h1")

// console all element grabbed
console.log("email", userEmail)
console.log("name", userName)
console.log("Details", userDetails)
console.log("all H1", h1)
console.log("all H1s", h1s)

const clientName = prompt("your name")

userName[0].innerText = clientName

const newH1 = document.createElement("h1")
newH1.innerText = "Hey " + userName[0].innerHTML + "! Welcome to my portfolio"
userDetails.appendChild(newH1)
