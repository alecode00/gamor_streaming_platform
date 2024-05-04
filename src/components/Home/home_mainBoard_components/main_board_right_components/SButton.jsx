import { PropTypes } from "prop-types";

export const SButton = ({
  arrayShowed,
  handleIsElement,
  handleArrayShowed,
  category,
  games,
  search,
  platform,
}) => {
  SButton.propTypes = {
    isElement: PropTypes.bool,
    arrayShowed: PropTypes.array,
    handleIsElement: PropTypes.func,
    handleArrayShowed: PropTypes.func,
    category: PropTypes.string,
    games: PropTypes.array,
    platform: PropTypes.string,
    search: PropTypes.string,
  };

  //Manejando el buscador--------------------------------------------
  const handleSearchNow = () => {
    console.log(games);
    console.log(`game[0].name${games[0].name}`);
    console.log(`search:${search}`);

    for (let i = 0; i < games.length; i++) {
      if (
        games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category &&
        i === 0
      ) {
        handleArrayShowed([games[i].name]);
        console.log("Estoy asignando arrayShoewed:");

        handleIsElement(true);
      } else if (
        games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category
      ) {
        handleArrayShowed([...arrayShowed, games[i].name]);
        console.log("Estoy asignando arrayShoewed:");

        handleIsElement(true);
      } else {
        handleIsElement(false);
      }
    }

    console.log(`arrayShowed:${arrayShowed}`);
    console.log("El boton fue tocado");
  };

  return (
    <>
      <button>+</button>
      {arrayShowed}
      <br />
      <button onClick={handleSearchNow}>Search Now</button>
    </>
  );
};
