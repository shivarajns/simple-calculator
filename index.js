const display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function displaydelete(){
    display.value = display.value.slice(0,-1)
    if (display.value==''){
        display.value='';
    }
}

function calculate(){
    display.value= eval(display.value);
}

function displayclear(){
    display.value = '';
}