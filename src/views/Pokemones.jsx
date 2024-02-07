import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";

const Pokemones = () => {
  const { name, setName } = useContext(PokemonContext);
  const navigate = useNavigate();

  const irAPersonajes = () => {
    navigate(`/pokemones/${name}`);
  };

  return (
    <div className="pokemon__container">
      <h1 className="Pokemon__title">Selecciona un Pokemon</h1>
      <input
        value={name}
        type="text"
        name=""
        id=""
        onChange={({ target }) => setName(target.value)}
        placeholder="Ingresa un nombre de Pokemon"
      />
      <button onClick={irAPersonajes}>buscar</button>
    </div>
  );
};
export default Pokemones;
