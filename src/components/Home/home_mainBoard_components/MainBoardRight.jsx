import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { PlatformSelector } from "./main_board_right_components/PlatformSelector";
import { Searcher } from "./main_board_right_components/Searcher";
import { SButton } from "./main_board_right_components/SButton";

const API_KEY = "95c3e55f582e4cc68d3d54bbe54bbd35";
const url_base = "https://api.rawg.io/api/games";

export const MainBoardRight = ({ category }) => {
  MainBoardRight.propTypes = {
    category: PropTypes.string,
  };

  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("PC");
  const [games, setGames] = useState([]); //obligado aqui
  const [arrayShowed, setArrayShowed] = useState([]);
  

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
  

  const handleArrayShowed = (game) => {
    setArrayShowed(game);
  };
  //OUTPUT
  return (
    <>
      <div className="platform">
        <PlatformSelector handleSelectPlatform={handleSelectPlatform} />
      </div>

      <div className="search-div">
        <div className="label2">
          <h3>02. </h3>
          <h4>Searching Game</h4>
        </div>
        <div className="input">
          <Searcher search={search} handleOnChange={handleOnChange} />
        </div>
        <div className="searchB">
          <SButton
            
            arrayShowed={arrayShowed}
            
            handleArrayShowed={handleArrayShowed}
            category={category}
            games={games}
            platform={platform}
            search={search}
          />
        </div>
      </div>
    </>
  );
};
