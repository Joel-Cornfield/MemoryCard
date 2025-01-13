import "../styles/Header.css";
import logo from "../assets/pokemon-logo.png";


function Header({ currentScore, bestScore }) {
    return (
        <header className="header">
            <div className="header-logo-section">
                <img
                    src={logo}
                    alt="Pokemon Text Logo"
                    className="header-logo" 
                ></img>
                <p className="header-title">Try to Remember Em!</p>
                <p className="header-subtitle">A Memory Card game by Joel Cornfield</p>
            </div>
            <div className="header-scores">
                <p className="score">
                    Current score: <br />
                    <span className="score-value">{currentScore}</span>
                </p>
                <p className="score">
                    Best score: <br />
                    <span className="score-value">{bestScore}</span>
                </p>
            </div>
        </header>
    );
}

export default Header;