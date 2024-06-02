const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
//｝
function appendBrackets() {
    display.value = ("("+display.value+")")
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function clearDisplay(){
    display.value = '';
}

function deleteTrailing(){
    display.value  = display.value.slice(0, -1)
}

async function calculate(){
    try{
                var x = display.value
        var str = ''
     for (let i = 0; i < x.length; i++) {
         if (x[i] == '^') {
             str = str + "**"
         }
         else{
          str = str + x[i];
      }}
        display.value = eval(str).toPrecision(6);
    }
    catch (error){
        display.value = error;

        
        await sleep(1500)
        clearDisplay()
    }
}
