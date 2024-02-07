import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [name, setName] = useState("");
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const respuesta = await fetch(apiUrl);
      const data = await respuesta.json();

      setApiData(data);
    };

    getApiData();
  }, [name]);

  return (
    <PokemonContext.Provider value={{ apiData, setApiData, name, setName }}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
