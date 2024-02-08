import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokeContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Pokemones = () => {
  const { pokemonName, setPokemonName, apiData } = useContext(PokemonContext);

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setPokemonName(e.target.value);
  };
  const irAPersonajes = () => {
    if (!pokemonName) {
      alert("Debes Seleccionar un Pokemon");
    }
    navigate(`/pokemones/${pokemonName}`);
  };

  return (
    <div className="pokemon__container">
      <h1 className="Pokemon__title">Selecciona un Pokemon</h1>
      <Form.Select
        className="pokemon__input"
        onChange={(e) => handleOptionChange(e)}
      >
        <option value="">SELECCIONA TU POKEMON</option>
        {apiData?.map(({ name }) => (
          <option value={name} key={name}>
            {name.toLocaleUpperCase()}
          </option>
        ))}
      </Form.Select>
      <Button
        className="pokemon__btn"
        variant="outline-light"
        onClick={() => irAPersonajes()}
      >
        VER DETALLE
      </Button>
    </div>
  );
};
export default Pokemones;
