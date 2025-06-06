let v=0
function increment(){
  
    v++
    document.getElementById('count').innerHTML=v
}


function decrement(){
    if(v>0){
        v--
    }
    
    document.getElementById('count').innerHTML=v
}

function reset(){
    v=0
    document.getElementById('count').innerHTML=v

}

  function textchange(){
   let h1= document.getElementById('head1')
   h1.innerHTML="Get out"
   h1.style.color="blue"
  }
  function tech(){
     let h1= document.getElementById('head1')
   h1.innerHTML="Hover on me"
   h1.style.color="black"
  }