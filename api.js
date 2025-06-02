//fetch("https://dummyjson.com/products") // get request
//.then(response => response.json())     // get response
//.then(data => console.log(data))  //  and data  
//.catch((error) => console.log("error", error)) // catch the error

  // best way to call api// 
  // const getApi = async () => { // async thing that is steps by step it will run first
   // try {
    //const response = await fetch("https://dummyjson.com/products");
    //const data = await response.json();
    //console.log(data); } 
   // catch(error) {
    //    console.error("error", error)
  //  }};
//getApi();


const getApi = async () => {
    try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data)
    displayProduct(data.products)
    //const first20 = data.products.slice(0, 10)
    //displayProduct(first20);
   // const fiiteredproduct = data.products.filter((p) => p.price < 10);
   // displayProduct(fiiteredproduct);
    } 
    catch(error) {
   console.error("error", error)
    }
};

getApi();

// Render product cards

function displayProduct(products) {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((product) => {
        const li = document.createElement("li");
        li.className = "product";
        li.innerHTML = `
          <img src ="${product.thumbnail}" alt = "${product.title}">
        <h3>${product.title}<h3/>
        <p>price: $${product.price}</p>
        <p>${product.description.slice(0, 60)}</p>
        <p>comment: ${product.reviews[0].comment}</p>
        <p>brand: ${product.brand}</p>
        <p>${product.shippingInformation}</p>
         <p>${product.availabilityStatus}</p>
        `
        ;
        list.appendChild(li)
    });
} 


//  automatically run on page load
window.addEventListener("DOMContentLoaded", getApi);
