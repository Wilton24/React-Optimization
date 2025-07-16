import React from 'react'; // Add this line
import { useState } from 'react';
import { log } from '../../log';


export default function ConfigureCounter({ handleSetCount }) {
    log('<ConfigureCounter /> rendered', 1);
    const [enteredNumber, setEnteredNumber] = useState(0);
    // const [chosenCount, setChosenCount] = useState(0);

    function handleSetClick() {
        handleSetCount(enteredNumber);
        setEnteredNumber(0);
    }

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
    };

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber} />
            <button onClick={handleSetClick}>Set</button>
        </section>
    )
}