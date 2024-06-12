import './RollDiceButton.css'
import React from 'react';

function RollDiceButton(props) {

    const handleClick = () => {
        console.log("Roll Dice Button Clicked");
        fetch(`http://localhost:5500/rolldice`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.dataHandler(data);
            }
        );
    }
    return (
        <button className="roll-dice-button" onClick={handleClick}>
            Roll Dice
        </button>
    )
}

export default RollDiceButton;