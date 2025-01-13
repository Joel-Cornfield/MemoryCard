import { useEffect, useState } from "react";
import randomNumbers from "../utils/randomNumbers";
import "../styles/Card.css";

function Card({ pokemonId, spriteUrl, changeCards }) {
  return (
    <div
      className="card"
      id={pokemonId}
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.classList.contains('card-image')) {
          changeCards(e);
        }
      }}
    >
      <img
        src={spriteUrl}
        id={pokemonId}
        className="card-image"
        alt={`Pokemon ${pokemonId}`}
        onClick={(e) => {
          e.stopPropagation();
          changeCards(e);
        }}
      />
    </div>
  );
}

function RenderCards({
  updateScore,
  resetScore,
  isGameOver,
  currentPokemon,
  setCurrentPokemon,
}) {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  // Fetch Pokemon Images
  useEffect(() => {
    let ignore = false;

    const randomNumsArr = randomNumbers(15);
    const urls = randomNumsArr.map(
        (num) => `https://pokeapi.co/api/v2/pokemon/${num}/`
    );

    const fetchPokemonData = async () => {
        try {
            const pokemonData = await Promise.all(
                urls.map((url) => fetch(url).then((response) => response.json()))
            );
            const newPokemonInfo = pokemonData.map((data) => ({
                id: data.id,
                url: data.sprites.other.showdown.front_default,
            }));
            if (!ignore) {
                setPokemonInfo(newPokemonInfo);
            }
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    fetchPokemonData();

    return () => {
        ignore = true;
    };
  }, [isGameOver, clickedPokemon.length]);

  useEffect(() => {
    if (isGameOver) {
      setClickedPokemon([]);
    }
  }, [isGameOver]);


  function changeCards(e) {
    const clickedId = e.target.id;
    if (!clickedPokemon.includes(clickedId)) {
      setClickedPokemon([...clickedPokemon, clickedId]);
      setCurrentPokemon(clickedId);
      updateScore();
    } else {
      setClickedPokemon([]);
      resetScore();
    }
  }

  return (
    <div className={`card-container ${isGameOver ? "disabled" : ""}`}>
      {pokemonInfo.map((pokemon) => {
        return (
          <Card
            pokemonId={pokemon.id}
            spriteUrl={pokemon.url}
            changeCards={changeCards}
            key={pokemon.id}
          />
        );
      })}
    </div>
  );
}

export default RenderCards;
