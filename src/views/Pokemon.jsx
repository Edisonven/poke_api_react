import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";

const Pokemon = () => {
  const { pokeParameter, setPokeParameter } = useContext(PokemonContext);
  const { name } = useParams();

  const getPokeApiName = async () => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await respuesta.json();
    setPokeParameter(data);
  };

  useEffect(() => {
    getPokeApiName();
  }, [name]);

  return (
    <div>
      {pokeParameter ? (
        <div className="card_container">
          <img
            className="card__img"
            src={pokeParameter.sprites.other.dream_world.front_default}
            alt=""
          />
          <div className="card__body">
            <p className="card__name"> {pokeParameter.name.toUpperCase()}</p>
            <div className="pokemon__stat">
              {pokeParameter.stats.map((stat) => (
                <div key={stat.stat.name} className="pokemon__stat">
                  <span>
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)}
                  </span>
                  : <span className="card__name">{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Pokemon;
