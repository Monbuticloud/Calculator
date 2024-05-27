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
        display.value = eval (display.value);
    }
    catch (error){
        display.value = "Error";
        var x = display.value
        var str = ''
     for (let i = 0; i < x.length; i++) {
         if x[i] == '^'{
             str = str + "**"
         }
         else{
          str = str + x[i];
      }}
        
        await sleep(500)
        clearDisplay()
    }
}
