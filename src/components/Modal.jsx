import { useState, useEffect } from "react";
import "../styles/Modal.css";

function Modal({ gameOver, score, resetScore, setGameOverFalse }) {
    const [isOpen, setOpen] = useState(false);
    
    function closeHandler(e) {
        e.preventDefault();
        console.log("Closing modal...");  // Debugging line
        setOpen(false);
        setGameOverFalse();
        resetScore();
    }

    useEffect(() => {
        if (gameOver) {
            console.log("Game Over! Modal Opened");  // Debugging line
            setOpen(true);
        } else {
            console.log("Game is still ongoing, Modal Closed");  // Debugging line
            setOpen(false);
        }
    }, [gameOver]);

    return (
        <div className={`modal ${isOpen ? "open" : "close"}`}>
            <div className="modal-content">
                <h1 className="modal-title">GAME OVER</h1>
                <p className="modal-score">Your final score is: {score}</p>
                <div className="modal-buttons">
                    <button className="retry-button" onClick={closeHandler}>Retry</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
