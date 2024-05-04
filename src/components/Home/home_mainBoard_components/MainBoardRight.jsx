import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { PlatformSelector } from "./main_board_right_components/PlatformSelector";
import { Searcher } from "./main_board_right_components/Searcher";
import { SButton } from "./main_board_right_components/SButton";

const API_KEY = "95c3e55f582e4cc68d3d54bbe54bbd35";
const url_base = "https://api.rawg.io/api/games";

let gamesNames;
let message;
export const MainBoardRight = ({ category }) => {
  MainBoardRight.propTypes = {
    category: PropTypes.string,
  };

  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("PC");
  const [games, setGames] = useState([]);
  const [arrayShowed, setArrayShowed] = useState([]);
  const [isElement, setIsElement] = useState();

  //Cambiando la busqueda---------------------------------------
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  //Cambiando la plataforma-----------------------------------
  const handleSelectPlatform = (event) => {
    event.preventDefault();
    if (event.target.id === 'PC') {
      setPlatform('PC')
    } else if (event.target.id === 'PS4') {
      setPlatform('PS4')
    } else if (event.target.id === 'XBOX') {
      setPlatform('XBOX')
    }
  }

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

  //Manejando el buscador--------------------------------------------
  const handleSearchNow = () => {
    console.log(games);
    console.log(`game[0].name${games[0].name}`);
    console.log(`search:${search}`);

    for(let i=0;i<games.length;i++){
      if(games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category &&  i===0){
        setArrayShowed([games[i].name]);
      console.log('Estoy asignando arrayShoewed:')

        setIsElement(true);
        console.log(`isElement: es ${isElement}`)

      } else if(games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category){
        setArrayShowed([...arrayShowed,games[i].name]);
      console.log('Estoy asignando arrayShoewed:')

        setIsElement(true);
      console.log(`isElement: es ${isElement}`)

      } else{
        message="No hay ningun juego que coincida con su busqueda";
        setIsElement(false);
      }
    }

    console.log(`arrayShowed:${arrayShowed}`);
    console.log("El boton fue tocado");
    /* if (isElement) {
      console.log('Estoy en isElement:')
      gamesNames = arrayShowed[0];
      console.log(`gamesNames: ${gamesNames}`);
    } else{
      gamesNames = message;
      console.log(`gamesNames: ${gamesNames}`);
    } */
    gamesNames = (
    <>
    <span>
    <p>
      {arrayShowed[0]}
    </p>
    <button>+</button>
    </span>
    </>
    )

  };
  //OUTPUT
  return (
    <>
      <div className="mainBoard right">
        <PlatformSelector handleSelectPlatform={handleSelectPlatform} />
        
        <section>
          <Searcher search={search} handleOnChange={handleOnChange} />
              {gamesNames}
          <SButton handleSearchNow={handleSearchNow} />
        </section>
      </div>
    </>
  );
};
