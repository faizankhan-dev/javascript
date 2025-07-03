console.log("Error handling");

try {
    x=12
    console.log(x);
    
    
} catch (error) {
    throw new Error("x ko define kro");
    
}
finally{
    console.log("program finish");
    
}

let p=new Promise((accept, reject) => {
    
    let car=fetch("https://fakestoreapi.in/api/products");
    if(car){
        car.then((e)=>{
            accept(e.json())
        })
    }
    else{
        reject("reject")
    }
})
p.then((e)=>{
    let data=e.products;
    // console.log(data);
    data.map((e)=>{
        console.log(e.id);
        
    })
    
})
