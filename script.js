const one_span = document.querySelector('#one');
const two_span = document.querySelector('#two');
const three_span = document.querySelector('#three');
const four_span = document.querySelector('#four');
const five_span = document.querySelector('#five');
const six_span = document.querySelector('#six');
const seven_span = document.querySelector('#seven');
const eight_span = document.querySelector('#eight');
const nine_span = document.querySelector('#nine');
const zero_span = document.querySelector('#zero');

const add_span = document.querySelector('#add');
const minus_span = document.querySelector('#minus');
const multiply_span = document.querySelector('#multiply');
const point_span = document.querySelector('#point');
const divide_span = document.querySelector('#divide');
const delete_span = document.querySelector('#delete');
const reset_span = document.querySelector('#reset');
const equals_span = document.querySelector('#equals');

const body = document.querySelector('body');
const display = document.querySelector('#display');
const buttonContainer = document.querySelector('#button-container');
const toggleContainer = document.querySelector('#toggle-container');
const calcLabel = document.querySelector('#calc-label');
const themeLabel = document.querySelector('#theme-label');
const themeOptions = document.querySelector('#theme-options');

const calcResult_h1 = document.querySelector('#calc-result');

const toggle_span = document.querySelector('#toggle');

let calculation = "";

const buttons = [one_span, two_span, three_span, four_span, five_span, six_span, seven_span, eight_span, nine_span, zero_span, add_span, minus_span, multiply_span, divide_span, point_span];

buttons.forEach(button =>{
    button.addEventListener('click', (event)=>{
        displayValue(event);
    })
});

const displayValue = (event) =>{
    const clickedButton = event.target;

    if(clickedButton === one_span){
        calculation += 1;

    } else if(clickedButton === two_span){
        calculation += 2;

    } else if(clickedButton === three_span){
        calculation += 3;

    } else if(clickedButton === four_span){
        calculation += 4;

    } else if(clickedButton === five_span){
        calculation += 5;

    }  else if(clickedButton === six_span){
        calculation += 6;

    } else if(clickedButton === seven_span){
        calculation += 7;

    } else if(clickedButton === eight_span){
        calculation += 8;

    } else if(clickedButton === nine_span){
        calculation += 9;

    } else if(clickedButton === zero_span){
        calculation += 0;

    } else if(clickedButton === add_span){
        calculation += "+";

    } else if(clickedButton === minus_span){
        calculation += "-";

    } else if(clickedButton === multiply_span){
        calculation += "*";

    } else if(clickedButton === divide_span){
        calculation += "/";

    } else if(clickedButton === point_span){
        calculation += ".";
    }

    calcResult_h1.innerText = calculation;
}

reset_span.addEventListener('click', ()=>{
    calculation = "0";
    calcResult_h1.innerText = calculation;
    reset_span.style.backgroundColor = "hsl(225, 40%, 73%)"
})

equals_span.addEventListener('click', ()=>{
    calcResult_h1.innerText = eval(calculation);
    
    equals_span.style.backgroundColor = "hsl(6, 56%, 60%)"
})

delete_span.addEventListener('click', ()=>{
    if (calcResult_h1 && calcResult_h1.textContent !== "0"){
        calcResult_h1.textContent = calcResult_h1.textContent.slice(0, -1)
    };

    delete_span.style.backgroundColor = "hsl(225, 40%, 73%)"
})

// Toggle Active Background and transition
let currentTogglePosition = 1;

toggle_span.addEventListener('click', ()=>{
    toggle_span.style.backgroundColor = "hsl(6, 56%, 60%)";

    toggle_span.classList.remove(`pos-${currentTogglePosition}`);

    if (currentTogglePosition === 3){
        currentTogglePosition = 1;

    } else{
        currentTogglePosition += 1;
    };

    toggle_span.classList.add(`pos-${currentTogglePosition}`);

    setBackgrounds();
});

// Calculator Backgrounds changes on toggle
const keypadsOne = [one_span, two_span, three_span, four_span, five_span, six_span, seven_span, eight_span, nine_span, zero_span, add_span, minus_span, multiply_span, divide_span, point_span];
const keypadsTwo = [delete_span, reset_span];
const texts = [calcLabel, themeLabel, themeOptions];

const setBackgrounds = () =>{

    // Theme 1
    if (currentTogglePosition === 1){
        body.style.backgroundColor = "hsl(222, 26%, 31%)";
        display.style.backgroundColor = "hsl(224, 36%, 15%)";
        buttonContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
        toggleContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
        toggle_span.style.backgroundColor = "hsl(6, 63%, 50%)"
        calcResult_h1.style.color = "hsl(0, 0%, 100%)";

        equals_span.style.backgroundColor = "hsl(6, 63%, 50%)";
        equals_span.style.boxShadow = "0 2.5px 1.5px hsl(6, 70%, 34%)";

        keypadsOne.forEach(keypad =>{
            keypad.style.backgroundColor = "hsl(30, 25%, 89%)";
            keypad.style.boxShadow = "0 2.5px 1.5px hsl(28, 16%, 65%)";
            keypad.style.color = "hsl(221, 14%, 31%)";
        })

        keypadsTwo.forEach(keypad =>{
            keypad.style.backgroundColor = "hsl(225, 21%, 49%)";
            keypad.style.boxShadow = "0 2.5px 1.5px hsl(224, 28%, 35%)";
            keypad.style.color = "hsl(0, 0%, 100%)";
        })

        texts.forEach(text =>{
            text.style.color ="hsl(0, 0%, 100%)";
        });

        // Theme 2
    } else if (currentTogglePosition === 2){
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        display.style.backgroundColor = "hsl(0, 0%, 93%)";
        buttonContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
        toggleContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
        calcResult_h1.style.color = "hsl(60, 10%, 19%)";

        equals_span.style.backgroundColor = "hsl(25, 98%, 40%)";
        equals_span.style.boxShadow = "0 2.5px 1.5px hsl(25, 99%, 27%)";

        keypadsOne.forEach(keypad =>{
            keypad.style.backgroundColor = "hsl(45, 7%, 89%)";
            keypad.style.boxShadow = "0 2.5px 1.5px hsl(35, 11%, 61%)";
            keypad.style.color = "hsl(60, 10%, 19%)";
        })

        keypadsTwo.forEach(keypad =>{
            keypad.style.backgroundColor = "hsl(185, 42%, 37%)";
            keypad.style.boxShadow = "0 2.5px 1.5px hsl(185, 58%, 25%)";
            keypad.style.color = "hsl(0, 0%, 100%)";
        })

        texts.forEach(text =>{
            text.style.color ="hsl(60, 10%, 19%)";
        });

        // Theme 3
    } else if (currentTogglePosition === 3){

        body.style.backgroundColor = "hsl(268, 75%, 9%)";
        display.style.backgroundColor = "hsl(268, 71%, 12%)";
        buttonContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
        toggleContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
        calcResult_h1.style.color = "hsl(52, 100%, 62%)";
        toggle_span.style.backgroundColor = "hsl(176, 100%, 44%)"

        equals_span.style.backgroundColor = "hsl(176, 100%, 44%)";
        equals_span.style.boxShadow = "0 2.5px 1.5px hsl(177, 92%, 70%)";

        keypadsOne.forEach(keypad =>{
            keypad.style.backgroundColor = "hsl(268, 47%, 21%)";
            keypad.style.boxShadow = "0 2.5px 1.5px hsl(290, 70%, 36%)";
            keypad.style.color = "hsl(52, 100%, 62%)";
        })

        keypadsTwo.forEach(keypad =>{
            keypad.style.backgroundColor = "hsl(281, 89%, 26%)";
            keypad.style.boxShadow = "0 2.5px 1.5px hsl(285, 91%, 52%)";
            keypad.style.color = "hsl(0, 0%, 100%)";
        })

        texts.forEach(text =>{
            text.style.color ="hsl(52, 100%, 62%)";
        });
    }
};

// Set active background for different themes







