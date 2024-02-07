import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();
const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const PokemonProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const respuesta = await fetch(apiUrl);
    const data = await respuesta.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <PokemonContext.Provider value={{ apiData, setApiData }}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
