import React, { useState } from 'react';
import Operation from './Operation';


export default function Board() {
    const [hiddenNote, setHiddenNote] = useState("none");
    function clickHandler(event) {
        const note = document.getElementById("note");
        
        if(hiddenNote==="none"){
            setHiddenNote("block"); 
            note.style.display = "block";
        }else {
            setHiddenNote("none");
            note.style.display = "none";
        }
        
    }
    
    
    return (
        <>
            <Operation />



            <br/>
            <button className="button"  onClick={clickHandler}>Note</button>
            <p id="note" hidden>Note: This code snippet aims to demonstrate the use of React, and as a result, certain error handling aspects have been omitted, which would be essential on a production environment.</p>
        </>
    );
}