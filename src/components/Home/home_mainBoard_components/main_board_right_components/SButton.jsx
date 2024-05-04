import { PropTypes } from "prop-types";
export const SButton = ({ arrayShowed, handleIsElement, handleArrayShowed ,category,games,search,platform}) => {
    SButton.propTypes = {
        arrayShowed:PropTypes.array,
        handleIsElement: PropTypes.func,
        handleArrayShowed: PropTypes.func,
        category: PropTypes.string,
        games: PropTypes.array,
        platform: PropTypes.string,
        search:PropTypes.string,
    };
    

 //Manejando el buscador--------------------------------------------
 const handleSearchNow = () => {
    console.log(games);
    console.log(`game[0].name${games[0].name}`);
    console.log(`search:${search}`);

    for(let i=0;i<games.length;i++){
      if(games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category &&  i===0){
            handleArrayShowed([games[i].name]);
      console.log('Estoy asignando arrayShoewed:')

      handleIsElement(true);
      } else if(games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category){
            handleArrayShowed([...arrayShowed,games[i].name]);
      console.log('Estoy asignando arrayShoewed:')

      handleIsElement(true);
      } /* else{
        message="No hay ningun juego que coincida con su busqueda";
        handleIsElement(false);
      } */
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
    /* gamesNames = (
    <>
    <span>
    <p>
      {arrayShowed[0]}
    </p>
    <button>+</button>
    </span>
    </>
    ) */

  };



  return (
    <>
      <button onClick={handleSearchNow}>Search Now</button>
      {arrayShowed}
    </>
  );
};
