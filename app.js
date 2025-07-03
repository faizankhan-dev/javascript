let baseurl="http://localhost:3000/products";
const getallproduct=async()=>{
    try {
        let res=await fetch(baseurl);
        let data=await res.json();
        let products=document.getElementById("products");
        // console.log(products);
        // console.log(data);
        products.innerHTML=data.map((e)=>{
            return`
            <h1>id:${e.id}</h1>
            <h1>title:${e.title}</h1>
            <h1>price:${e.price}</h1>
            `
        })
        
    } catch (error) {
  alert(error)
    }
}
// getallproduct();

const addproduct=async()=>{
    
   let title=document.getElementById("title").value;
   let price=document.getElementById("price").value;
    try {
        await fetch(baseurl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,price})

        });
    } catch (error) {
        
    }
}
const updatedata=async()=>{
    let id=document.getElementById("id").value;
    let title=document.getElementById("utitle").value;
    let price=document.getElementById("uprice").value;
    try {
        await fetch(`${baseurl}/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify({title,price})
        });
    } catch (error) {
        console.log(error);
        
        
    }
}

