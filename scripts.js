let go = document.getElementById("comeceid")  
 let goscript = document.getElementById("comeceid").innerHTML
 let orçamento = document.getElementById("orçamentoid")
 let orçamento2 = document.getElementById("orçamentoid2")
 let orçamentoscript = document.getElementById("orçamentoid").innerHTML
 

 go.addEventListener("mouseenter", letsgo)
 go.addEventListener("mouseout", letsgo1)
    orçamento.addEventListener("mouseenter", () => {
    orçamento.innerHTML = "GO!"
 
    setTimeout(() => orçamento.style.animation = "letsgoanimation 0.3s forwards", );
 })
 orçamento.addEventListener("mouseout",  () =>{
    orçamento.innerHTML = orçamentoscript
    orçamento.style.transition = "0.5s"
    setTimeout(() => orçamento.style.animation = "orçamentoanimation2 0.3s forwards", );
 })


 


 function letsgo1(){
    go.innerHTML = goscript
    go.classList.remove("comecar");
    go.classList.add("comece")
    go.style.transition = "0.5s"
    setTimeout(() => go.style.animation = "letsgoanimation2 0.3s forwards", );

  
    
     
 }


 function letsgo(){
    go.innerHTML = "GO!"
    go.classList.remove("comece")
    go.classList.add("comecar");
    setTimeout(() => go.style.animation = "letsgoanimation 0.3s forwards", );
   
    
    

 }



let escuro = window.document.getElementById("bg")

function oculto1(){
    
    let boculto1 = document.getElementById("modal")
    boculto1.style.visibility = "hidden"
    escuro.style.visibility = "hidden"
    

}


function aparecer1(){
    
    let baparecer1 = document.getElementById("modal")
    baparecer1.style.visibility = "visible"
    escuro.style.visibility = "visible"
    baparecer1.style.animation = "none";
    setTimeout(() => baparecer1.style.animation = "modalanimation 0.5s ", );
    
    
    
    

}




function oculto2(){
    
    let boculto2 = document.getElementById("modal2")
    boculto2.style.visibility = "hidden"
    escuro.style.visibility = "hidden"
   

}

function aparecer2(){
    
    let baparecer2 = document.getElementById("modal2")
    baparecer2.style.visibility = "visible"
    escuro.style.visibility = "visible"
    baparecer2.style.animation = "none";
    setTimeout(() => baparecer2.style.animation = "modalanimation 0.5s ", );

}

function oculto3(){
    
    let boculto3 = document.getElementById("modal3")
    boculto3.style.visibility = "hidden"
    escuro.style.visibility = "hidden"

}

function aparecer3(){
    
    let baparecer3 = document.getElementById("modal3")
    baparecer3.style.visibility = "visible"
    escuro.style.visibility = "visible"
    baparecer3.style.animation = "none";
    setTimeout(() => baparecer3.style.animation = "modalanimation 0.5s ", );

}

function oculto4(){
    
    let boculto4 = document.getElementById("modal4")
    boculto4.style.visibility = "hidden"
    escuro.style.visibility = "hidden"

}

function aparecer4(){
    
    let baparecer4 = document.getElementById("modal4")
    baparecer4.style.visibility = "visible"
    escuro.style.visibility = "visible"
    baparecer4.style.animation = "none";
    setTimeout(() => baparecer4.style.animation = "modalanimation 0.5s ", );

}

function oculto5(){
    
    let boculto5 = document.getElementById("modal5")
    boculto5.style.visibility = "hidden"
    escuro.style.visibility = "hidden"

}

function aparecer5(){
    
    let baparecer5 = document.getElementById("modal5")
    baparecer5.style.visibility = "visible"
    escuro.style.visibility = "visible"
    baparecer5.style.animation = "none";
    setTimeout(() => baparecer5.style.animation = "modalanimation 0.5s ", );

}

function oculto6(){
    
    let boculto6 = document.getElementById("modal6")
    boculto6.style.visibility = "hidden"
    escuro.style.visibility = "hidden"

}

function aparecer6(){
    
    let baparecer6 = document.getElementById("modal6")
    baparecer6.style.visibility = "visible"
    escuro.style.visibility = "visible"
    baparecer6.style.animation = "none";
    setTimeout(() => baparecer6.style.animation = "modalanimation 0.5s ", );

}



function sumirul(){
    var ul12  = document.getElementsByTagName("ul")[0]
    ul12.style.left = "-100%"
    
}





function aparecerul(){
    
    let ul12 = document.getElementsByTagName("ul")[0]
    
    if(ul12.style.left == "-100%"){
    
    ul12.style.left = "0"
    }else{
        ul12.style.left = "-100%"
    }
    
}




