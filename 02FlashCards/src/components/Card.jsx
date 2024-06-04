import React, { useState } from 'react'

function Card({currentFlashCard}) {
    const [isFlipped, setIsFlipped] = useState(false)
    console.log("isFlipped", isFlipped);
    
    return (
        <div className="container">
            <div className={`${isFlipped ? "card flipped" : "card"}`} onClick={() => setIsFlipped(prev => !prev)}>
                { isFlipped ? <div className="back">{currentFlashCard.answer}</div> : <div className="front">{currentFlashCard.question}</div> }
            </div>
        </div>
    )
}

export default Card