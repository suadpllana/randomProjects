const displayInput = document.getElementById("calculationInput");

function calcInput(input){
    displayInput.value += input;
}

function calculate(){
    try{
        displayInput.value = eval(displayInput.value).toFixed(2);  
    }
    catch(error){
        console.error("Please finish ur calculations")
    }   
}
function reset(){
    displayInput.value = ""
}
