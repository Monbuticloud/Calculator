const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
//｝
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function clearDisplay(){
    display.value = '';
}
function calculate(){
    try{
        display.value = eval (display.value);
    }
    catch (error){
        display.value = "Error";
        
        await sleep(500)
        clearDisplay()
    }
}
