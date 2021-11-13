let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = ''; 
for (item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        console.log(buttonText)
        if (buttonText == "x"){
            buttonText = "*";
            screenValue += buttonText
            screen.value =screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'sin'){
            screen.value = Math.sin(screen.value)
        }
        else if(buttonText == 'cos'){
            screen.value = Math.cos(screen.value);
        }
        else if(buttonText == 'tan'){
            screen.value = Math.tan(screen.value);
        }
        else{
            screenValue += buttonText
            screen.value =screenValue;
        }
    })
}
