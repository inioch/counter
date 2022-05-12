let value = document.getElementById("span");
let dc = document.getElementsByClassName("decrease");
let inc = document.getElementsByClassName("reset");
let reset = document.getElementsByClassName("decrease");

let count = 0;

function invalue(){
    count++;
    value.textContent = count;  
}
function devalue(){
    count--;
    value.textContent = count;  
}
function reseting(){
    count = 0;
    value.textContent = count;
    
}   

$("button").on("click", function(){
    if(value.innerText > 0 ){
        value.style.color = "green"
       
    }
    else if(value.innerText == 0 ){
        value.style.color = "white"
       
    }
    else{
        value.style.color = "red";
    }
})
