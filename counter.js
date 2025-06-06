let v=0
function increase(){
       if (v% 2 != 0) {
        
    head.style.color = "red";
    if(v==0){
        head.style.color = "black"
    }
  }
   else {
    head.style.color = "black"; 
  }
 
    v++
    document.getElementById('count').innerHTML=v
}

function reset(){
    v=0
     if(v==0){
        head.style.color = "black"
    }
    document.getElementById('count').innerHTML=v

}

function decrease(){
        if (v% 2 != 0) {
        
    head.style.color = "red";
    if(v==0){
        head.style.color = "black"
    }
  }
   else {
    head.style.color = "black"; 
  }
 
    
        v--
    
    
    document.getElementById('count').innerHTML=v
}
let head=document.getElementById('count')

  
 
