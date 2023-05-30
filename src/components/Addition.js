import React, { useState } from 'react';

export default function Addition() {
    const [numbers, setNumbers] = useState({
        number1: 0,
        number2: 0
    });
    
    function num1ChangeHanlder(event) {
        setNumbers({
            number1: event.target.value === ""? 0 : event.target.value ,
            number2: numbers.number2
        });
        
    };
    function num2ChangeHanlder(event) {
        setNumbers({
            number1: numbers.number1,
            number2: event.target.value === ""? 0 : event.target.value 
        });
    };
    let sum = parseInt(numbers.number1) + parseInt(numbers.number2);
    
    return (
        <span>
            <input type="text" onChange={num1ChangeHanlder} name="1" value={numbers.number1} />  +  
            <input type="text" onChange={num2ChangeHanlder} name ="2" value={numbers.number2} /> = {sum}

        </span>
    
    );
}
