import RenderCards from "../components/Card";
import "../styles/Content.css"

function Content({
    updateScore,
    resetScore,
    isGameOver,
    currentPokemon,
    setCurrentPokemon,
}) {
    return (
        <main className="content-main">
            <RenderCards
                updateScore={updateScore}
                resetScore={resetScore}
                isGameOver={isGameOver}
                currentPokemon={currentPokemon}
                setCurrentPokemon={setCurrentPokemon}
            ></RenderCards>
        </main>
    );
}

export default Content;