import React, { useState } from 'react';

export default function Sustraction() {
    const [numbers, setNumbers] = useState({
        number1: 0,
        number2: 0
    });
    
    function num1ChangeHanlder(event) {

        setNumbers({
            number1: event.target.value,
            number2: numbers.number2
        });
        
        setNumbers({
            number1: event.target.value,
            number2: numbers.number1
        });
        
    };
    function num2ChangeHanlder(event) {
        setNumbers({
            number1: numbers.number1,
            number2: event.target.value === ""? 0 : event.target.value 
        });
    };

    let sus =  parseFloat(numbers.number1) - parseFloat(numbers.number2);
    
    return (
        <div>
            <input type="text" onChange={num1ChangeHanlder} value={numbers.number1} />  - &nbsp; 
            <input type="text" onChange={num2ChangeHanlder} name ="2" value={numbers.number2} /> = {sus}

        </div>
    
    );
}
