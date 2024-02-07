import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";
const Pokemon = () => {
  const { apiData } = useContext(PokemonContext);

  
  const { name } = useParams();
  return (
    <div className="mt-5">
      {apiData.name === name ? (
        <div className="card_container">
          <div>
            <img src={apiData.sprites.front_default} alt="" />
            <p>{apiData.name}</p>
          </div>
        </div>
      ) : (
        <p>Personaje no encontrado</p>
      )}
    </div>
  );
};

export default Pokemon;
