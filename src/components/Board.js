import React, { useState } from 'react';
import Addition from './Addition';
import Sustraction from './Sustraction';
import Multiplication from './Multiplication';
import Division from './Division';


export default function Board() {
    const [hiddenNote, setHiddenNote] = useState("none");
    function clickHandler(event) {
        const note = document.getElementById("note");
        console.log("note: ", note);
        if(hiddenNote==="none"){
            setHiddenNote("block"); 
            note.style.display = "block";
        }else {
            setHiddenNote("none");
            note.style.display = "none";
        }
        console.log(hiddenNote);
    }
    
    
    return (
        <>
            <Addition />
            <Sustraction />
            <Multiplication />
            <Division />


            <br/>
            <button className="button"  onClick={clickHandler}>Note</button>
            <p id="note" hidden>Note: This code snippet aims to demonstrate the use of React, and as a result, certain error handling aspects have been omitted, which would be essential on a production environment.</p>
        </>
    );
}