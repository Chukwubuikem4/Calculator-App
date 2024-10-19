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

        if(clickedButton === one_span && currentTogglePosition === 1){
            one_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === one_span && currentTogglePosition === 2){
            one_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === one_span && currentTogglePosition === 3){
            one_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === two_span){
        calculation += 2;

        if(clickedButton === two_span && currentTogglePosition === 1){
            two_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === two_span && currentTogglePosition === 2){
            two_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === two_span && currentTogglePosition === 3){
            two_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === three_span){
        calculation += 3;

        if(clickedButton === three_span && currentTogglePosition === 1){
            three_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === three_span && currentTogglePosition === 2){
            three_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === three_span && currentTogglePosition === 3){
            three_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === four_span){
        calculation += 4;

        if(clickedButton === four_span && currentTogglePosition === 1){
            four_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === four_span && currentTogglePosition === 2){
            four_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === four_span && currentTogglePosition === 3){
            four_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === five_span){
        calculation += 5;

        if(clickedButton === five_span && currentTogglePosition === 1){
            five_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === five_span && currentTogglePosition === 2){
            five_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === five_span && currentTogglePosition === 3){
            five_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    }  else if(clickedButton === six_span){
        calculation += 6;

        if(clickedButton === six_span && currentTogglePosition === 1){
            six_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === six_span && currentTogglePosition === 2){
            six_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === six_span && currentTogglePosition === 3){
            six_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === seven_span){
        calculation += 7;

        if(clickedButton === seven_span && currentTogglePosition === 1){
            seven_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === seven_span && currentTogglePosition === 2){
            seven_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === seven_span && currentTogglePosition === 3){
            seven_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === eight_span){
        calculation += 8;

        if(clickedButton === eight_span && currentTogglePosition === 1){
            eight_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === eight_span && currentTogglePosition === 2){
            eight_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === eight_span && currentTogglePosition === 3){
            eight_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === nine_span){
        calculation += 9;

        if(clickedButton === nine_span && currentTogglePosition === 1){
            nine_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === nine_span && currentTogglePosition === 2){
            nine_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === nine_span && currentTogglePosition === 3){
            nine_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === zero_span){
        calculation += 0;

        if(clickedButton === zero_span && currentTogglePosition === 1){
            zero_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === zero_span && currentTogglePosition === 2){
            zero_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === zero_span && currentTogglePosition === 3){
            zero_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === add_span){
        calculation += "+";

        if(clickedButton === add_span && currentTogglePosition === 1){
            add_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === add_span && currentTogglePosition === 2){
            add_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === add_span && currentTogglePosition === 3){
            add_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === minus_span){
        calculation += "-";

        if(clickedButton === minus_span && currentTogglePosition === 1){
            minus_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === minus_span && currentTogglePosition === 2){
            minus_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === minus_span && currentTogglePosition === 3){
            minus_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === multiply_span){
        calculation += "*";

        if(clickedButton === multiply_span && currentTogglePosition === 1){
            multiply_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === multiply_span && currentTogglePosition === 2){
            multiply_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === multiply_span && currentTogglePosition === 3){
            multiply_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === divide_span){
        calculation += "/";

        if(clickedButton === divide_span && currentTogglePosition === 1){
            divide_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === divide_span && currentTogglePosition === 2){
            divide_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === divide_span && currentTogglePosition === 3){
            divide_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }

    } else if(clickedButton === point_span){
        calculation += ".";

        if(clickedButton === point_span && currentTogglePosition === 1){
            point_span.style.backgroundColor = "hsl(20, 18%, 95%)";

        } else if (clickedButton === point_span && currentTogglePosition === 2){
            point_span.style.backgroundColor = "hsl(30, 11%, 96%)";

        } else if (clickedButton === point_span && currentTogglePosition === 3){
            point_span.style.backgroundColor = "hsl(268, 48%, 45%)";
        }
    }

    calcResult_h1.innerText = calculation;
}

reset_span.addEventListener('click', (event)=>{
    calculation = "";
    calcResult_h1.innerText = calculation;

    if(event.target && currentTogglePosition === 1){
        reset_span.style.backgroundColor = "hsl(225, 30%, 63%)";

    } else if (event.target && currentTogglePosition === 2){
        reset_span.style.backgroundColor = "hsl(185, 39%, 60%)";
        
    } else if (event.target && currentTogglePosition === 3){
        reset_span.style.backgroundColor = "hsl(281, 73%, 46%)";
    }
})

equals_span.addEventListener('click', (event)=>{
    calcResult_h1.innerText = eval(calculation);

    if(event.target && currentTogglePosition === 1){
        equals_span.style.backgroundColor = "hsl(6, 54%, 59%)";

    } else if (event.target && currentTogglePosition === 2){
        equals_span.style.backgroundColor = "hsl(25, 54%, 53%)";
        
    } else if (event.target && currentTogglePosition === 3){
        equals_span.style.backgroundColor = "hsl(176, 62%, 64%)";
    }
})

delete_span.addEventListener('click', (event)=>{

    if (calcResult_h1 && calcResult_h1.textContent !== "0"){
        calcResult_h1.textContent = calcResult_h1.textContent.slice(0, -1)
    };

    if(event.target && currentTogglePosition === 1){
        delete_span.style.backgroundColor = "hsl(225, 30%, 63%)";

    } else if (event.target && currentTogglePosition === 2){
        delete_span.style.backgroundColor = "hsl(185, 39%, 60%)";
        
    } else if (event.target && currentTogglePosition === 3){
        delete_span.style.backgroundColor = "hsl(281, 73%, 46%)";
    }
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







