import React, { useState } from 'react';

export default function Operation() {
    const [numbers, setNumbers] = useState({
        number1: 0,
        number2: 0, 
        operator: "+"
    });
    
    function num1ChangeHanlder(event) {
        setNumbers({
            number1: parseFloat(event.target.value),
            number2: numbers.number2,
            operator: numbers.operator
        });
        
    };
    function num2ChangeHanlder(event) {
        setNumbers({
            number1: numbers.number1,
            number2: parseFloat(event.target.value), 
            operator: numbers.operator
        });
    };
    function selectChangeHandler(event) {
        setNumbers({
            number1: numbers.number1,
            number2: numbers.number2,
            operator: event.target.value
        });

    };
    
    const total = (() => {
        switch(numbers.operator) {
            case "+":
                return numbers.number1 + numbers.number2;
            case "-":
                return numbers.number1 - numbers.number2;
            case "*":
                return numbers.number1 * numbers.number2;
            case "/":
                return numbers.number1 / numbers.number2;
            default:
                return NaN;
        }
    })();  
    
    return (
        <div>
            <input type="text" onChange={num1ChangeHanlder} value={numbers.number1} /> &nbsp;  

            <select onChange={selectChangeHandler}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select> &nbsp;  

            <input type="text" onChange={num2ChangeHanlder} value={numbers.number2} /> = {total}


        </div>

    );
}
