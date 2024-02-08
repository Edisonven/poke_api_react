import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";

const Pokemon = () => {
  const { pokemonName } = useContext(PokemonContext);
  const { name } = useParams();
  return (
    <div>
      {pokemonName.name === name ? (
        <div className="card_container">
          <img
            className="card__img"
            src={apiData.sprites.front_default}
            alt=""
          />
          <div className="card__body">
            <p className="card__name"> {apiData.name.toUpperCase()}</p>
            <p className="card__name">Hp: {apiData.stats[0].base_stat}</p>
            <p className="card__name">Atack: {apiData.stats[1].base_stat}</p>
            <p className="card__name">Defense: {apiData.stats[2].base_stat}</p>
            <p className="card__name">Type: {apiData.types[0].type.name}</p>
          </div>
        </div>
      ) : (
        <p>Personaje no encontrado</p>
      )}
    </div>
  );
};

export default Pokemon;
