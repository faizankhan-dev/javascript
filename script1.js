import cloth from "./newproduct.js";
// console.log(cloth);

let shirt=document.getElementById('cloth')

shirt.innerHTML=cloth.map((obj)=>{
    return`
     <div style="height: 300px; width: 300px; border: 4px solid red;">
            <p>desc:${obj.desc}</p>
            <img src="${obj.img}" alt="img" height="50px">
            <h3>price:${obj.price}</h3>
            <button onclick="addproduct(${obj.price})">Add</button>
            <button onclick="removeproduct(${obj.price})">Remove</button>

        </div>
    `
}).join("")

let price=0;
let quantity=0;
let cart=document.getElementById('cart');

window.addproduct=(p)=>{
//    price=price+p;
//    if(price>0){
//     cart.innerHTML=<h1>EMPTY CART</h1>
//    }
   
//     else{
//         cart.innerHTML=price;
//     }
//    }
  

window.removeproduct=(p)=>{
     price=price-p;
//           if(price>0){
//     cart.innerHTML=<h1>EMPTY CART</h1>
//    }
   
//     else{
//         cart.innerHTML=price;
//     }
// }

// console.log(window);



