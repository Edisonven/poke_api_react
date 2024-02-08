import { createContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonName, setPokemonName] = useState("");
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
  const [apiData, setApiData] = useState([]);
  const [pokeParameter, setPokeParameter] = useState("");

  useEffect(() => {
    try {
      const getApiData = async () => {
        const respuesta = await fetch(apiUrl);
        const { results } = await respuesta.json();
        setApiData(results);
      };
      getApiData();
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        apiData,
        setApiData,
        pokemonName,
        setPokemonName,
        pokeParameter,
        setPokeParameter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
