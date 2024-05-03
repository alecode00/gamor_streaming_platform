import { useEffect, useState } from "react";


const API_KEY = "b84394dc8aa64b01a9a1fdcc26a1d6a8";
const url_base = "https://api.rawg.io/api/games";

export const MainBoardRight = () => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  const handleSelectLink = (event) => {
    //Aqui va logica de busqueda. debe cambiar endpoint de plataforma--
    event.preventDefault();
  };
  const handleOnChange = (event) => {
    setSearch(event.target.value);
    //Aqui va logica de busqueda, cambio de endpoint------------
  };

  const fetchGames = async () => {
    try {
      const response = await fetch(`${url_base}?key=${API_KEY}`);
      const data = await response.json();
      setGames(data.results);
      /* data.results.forEach(game => {
        console.log(game.name);
      }); */
      /* console.log('raya'); */
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGames()
  },[])



  const handleSearchNow = () => {
    //Aqui va el fetch buscando los juegos que coincidan en categoria, platform y name.----------------
    games.forEach(game => {
      console.log(game.name)
    })
    console.log("El boton fue tocado");
  };

  return (
    <>
      <div className="mainBoard right">
        <section>
          <p>01. </p>
          <h3>Choose Platform</h3>
          {/* <select name="platform" id="platform">
            <option value="PC">PC</option>
            <option value="PS4">PS4</option>
            <option value="XBOX">XBOX</option>
          </select> */}
          <a href="#" onClick={handleSelectLink}>
            PC
          </a>
          <a href="#" onClick={handleSelectLink}>
            PS4
          </a>
          <a href="#" onClick={handleSelectLink}>
            XBOX
          </a>
        </section>
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
            <button onClick={handleSearchNow}>Search Now</button>
          </div>
        </section>
      </div>
    </>
  );
};
