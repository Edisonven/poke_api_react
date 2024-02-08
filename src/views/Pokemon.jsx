import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";

const Pokemon = () => {
  const { pokemonName, pokemonDetail } = useContext(PokemonContext);
  const { name } = useParams();
  const [pokeParameter, setPokeParameter] = useState({});

  const getPokeApiName = async () => {
    const respuesta = await fetch(pokemonDetail);
    const data = await respuesta.json();
    setPokeParameter(data);
  };

  useEffect(() => {
    getPokeApiName();
  }, [pokemonName]);

  return (
    <div>
      {pokeParameter.name === name ? (
        <div className="card_container">
          <img
            className="card__img"
            src={pokeParameter.sprites.other.dream_world.front_default}
            alt=""
          />
          <div className="card__body">
            <p className="card__name"> {pokeParameter.name.toUpperCase()}</p>
            <p className="card__name">Hp: {pokeParameter.stats[0].base_stat}</p>
            <p className="card__name">
              Atack: {pokeParameter.stats[1].base_stat}
            </p>
            <p className="card__name">
              Defense: {pokeParameter.stats[2].base_stat}
            </p>
            <p className="card__name">
              Type: {pokeParameter.types[0].type.name}
            </p>
          </div>
        </div>
      ) : (
        <p>Personaje no encontrado</p>
      )}
    </div>
  );
};

export default Pokemon;
