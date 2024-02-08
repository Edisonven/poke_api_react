import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";

const Pokemones = () => {
  const {
    pokemonName,
    setPokemonName,
    apiData,
    pokemonDetail,
    setPokemonDetail,
  } = useContext(PokemonContext);

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    const { name, url } = apiData.find(
      (pokemon) => pokemon.name === e.target.value
    );
    setPokemonName(name);
    setPokemonDetail(url);
  };
  const irAPersonajes = () => {
    navigate(`/pokemones/${pokemonName}`);
  };

  return (
    <div className="pokemon__container">
      <h1 className="Pokemon__title">Selecciona un Pokemon</h1>
      <select onChange={(e) => handleOptionChange(e)}>
        <option className="pokemon__input" value="">
          SELECCIONA TU POKEMON
        </option>
        {apiData.map((pokemon) => (
          <option value={pokemon.name} key={pokemon.name}>
            {pokemon.name.toLocaleUpperCase()}
          </option>
        ))}
      </select>
      <button className="pokemon__btn" onClick={() => irAPersonajes()}>
        BUSCAR
      </button>
    </div>
  );
};
export default Pokemones;
