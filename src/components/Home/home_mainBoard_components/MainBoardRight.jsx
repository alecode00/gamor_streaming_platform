import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { PlatformSelector } from "./main_board_right_components/PlatformSelector";

const API_KEY = "95c3e55f582e4cc68d3d54bbe54bbd35";
const url_base = "https://api.rawg.io/api/games";

let gamesNames = <></>;

export const MainBoardRight = ({ category }) => {
  MainBoardRight.propTypes = {
    category: PropTypes.string,
  };

  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  const [arrayShowed, setArrayShowed] = useState([]);
  const [platform, setPlatform] = useState("PC");

  //Cambiando la busqueda
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  //Consumiendo la API de juegos
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

  //Manejando el buscador
  const handleSearchNow = () => {
    console.log(games);
    console.log(`game[0].name${games[0].name}`);
    console.log(`search:${search}`);

    let arrayShowedb = games.filter(
      (game) =>
        game.name === search &&
        game.parent_platforms[0].platform.name === platform &&
        game.genres[0].name === category
    );

    setArrayShowed([arrayShowedb[0].name]);
    console.log(`arrayShowed:${arrayShowed}`);
    console.log("El boton fue tocado");
    // gamesNames = arrayShowed.map((item) => item);
    for (let i = 0; i < arrayShowed.length; i += 1) {
      gamesNames = arrayShowed[i];
    }
    console.log(gamesNames);
  };
  //OUTPUT
  return (
    <>
      <div className="mainBoard right">
        <PlatformSelector setPlatform={setPlatform} />
        <section>
          <p>02. </p>
          <h3>Searching Game</h3>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleOnChange}
          />
          <div>
            {/*Aqui debe ir un map, mostrando los juegos traidos*/}
            {gamesNames}
            <button onClick={handleSearchNow}>Search Now</button>
          </div>
        </section>
      </div>
    </>
  );
};
