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
async function calculate(){
    try{
        await display.value = eval (display.value);
    }
    catch (error){
        await display.value = "Error";
        
        await sleep(500)
        clearDisplay()
    }
}
