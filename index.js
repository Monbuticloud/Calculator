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
function root(base, number){
    return Math.pow(number, (1 / base))
}
function cbrt(x){
    return Math.pow(x, 1/3)
}
function sqrt(x) {
    return Math.sqrt(x)
}




function ln(x){
    return (Math.log(x))
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
        if (str.length < 6){
            
        display.value = eval(str).toPrecision(6);
    }
        else{
            display.value = eval(str).toPrecision(str.length+1);
        }
    
    }
    catch (error){
        display.value = error;

        
        await sleep(1500)
        clearDisplay()
    }
}
