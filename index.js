const display =document.getElementByld ("display");
function append ToDisplay (input){
    display.value += input;
｝
function clear Display (){
    display.value = ''";
}
function calculate(){
    try{
        display.value = eval (display.value);
    }
    catch (error){
        display.value = "Error";
    }
}
