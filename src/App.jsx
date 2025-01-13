import { useState, useEffect } from 'react';
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Modal from "./components/Modal";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  function updateScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    setIsGameOver(true);
  }

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Content
        updateScore={updateScore}
        resetScore={resetScore}
        isGameOver={isGameOver}
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
      <Modal
        gameOver={isGameOver}
        setGameOverFalse={() => setIsGameOver(false)}
        score={currentScore}
        resetScore={() => setCurrentScore(0)}
      />
    </>
  );
}

export default App;
