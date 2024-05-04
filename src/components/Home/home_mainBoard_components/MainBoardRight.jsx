import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { PlatformSelector } from "./main_board_right_components/PlatformSelector";
import { Searcher } from "./main_board_right_components/Searcher";
import { SButton } from "./main_board_right_components/SButton";

const API_KEY = "95c3e55f582e4cc68d3d54bbe54bbd35";
const url_base = "https://api.rawg.io/api/games";

let gamesNames;
let message = 'No hay ningun elemento';
export const MainBoardRight = ({ category }) => {
  MainBoardRight.propTypes = {
    category: PropTypes.string,
  };

  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("PC");
  const [games, setGames] = useState([]); //obligado aqui
  const [arrayShowed, setArrayShowed] = useState([]);
  const [isElement, setIsElement] = useState();

  //Cambiando la busqueda---------------------------------------
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  //Cambiando la plataforma-----------------------------------
  const handleSelectPlatform = (event) => {
    event.preventDefault();
    if (event.target.id === "PC") {
      setPlatform("PC");
    } else if (event.target.id === "PS4") {
      setPlatform("PS4");
    } else if (event.target.id === "XBOX") {
      setPlatform("XBOX");
    }
  };

  //Consumiendo la API de juegos---------------------------------
  const fetchGames = async () => {
    try {
      const response = await fetch(`${url_base}?key=${API_KEY}`);
      const data = await response.json();
      console.log(`data.results: ${data.results}`);
      setGames(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);
  const handleIsElement = (is) => {
    setIsElement(is);
  };

  const handleArrayShowed = (name) => {
    setArrayShowed(name);
  };
  useEffect(() => {
    if (isElement) {
      console.log("Estoy en isElement:");
      gamesNames = gamesNames = (
        <>
          <span>
            <p>{arrayShowed[0]}</p>
            <button>+</button>
          </span>
        </>
      );
      console.log(`gamesNames: ${gamesNames}`);
    } else {
      gamesNames = message;
      console.log(`gamesNames: ${gamesNames}`);
    }
  }, [arrayShowed]);

  //OUTPUT
  return (
    <>
      <div className="mainBoard right">
        <PlatformSelector handleSelectPlatform={handleSelectPlatform} />

        <section>
          <Searcher search={search} handleOnChange={handleOnChange} />
          {gamesNames}
          <SButton
            arrayShowed={arrayShowed}
            handleIsElement={handleIsElement}
            handleArrayShowed={handleArrayShowed}
            category={category}
            games={games}
            platform={platform}
            search={search}
          />
        </section>
      </div>
    </>
  );
};
