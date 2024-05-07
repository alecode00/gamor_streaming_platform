import { PropTypes } from "prop-types";
import { useState } from "react";
import { AddButton } from "./search_button_components/AddButton";

/* let showed; */
const initialAddedArray = [
  {
    name: "No game enter",
    state: false,
  },
];
export const SButton = ({
  isElement,
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

  const [addedArray, setAddedArray] = useState(initialAddedArray);
  const [isTouched, setIsTouched] = useState(false);


  const handleAddedArray = (newAddedArray) =>{
    setAddedArray(newAddedArray);
  }
  //Manejando el buscador--------------------------------------------
  const handleSearchNow = () => {
    setIsTouched(!isTouched);
    console.log(games);
    console.log(`game[0].name${games[0].name}`);
    console.log(`search:${search}`);

    for (let i = 0; i < games.length; i++) {
      if (
        games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category /* &&
        games.length === 0 */
      ) {
        handleArrayShowed([games[i].name]);
        console.log("Estoy asignando arrayShoewed en 1:");

        handleIsElement(true);
      } /* else if (
        games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category
      ) {
        handleArrayShowed([...arrayShowed, games[i].name]);
        console.log("Estoy asignando arrayShoewed en 2:");

        handleIsElement(true);
      } */ else {
        handleIsElement(false);
        console.log("entre en false");
      }
    }

    console.log(`arrayShowed:${arrayShowed}`);
    console.log("El boton fue tocado");
  };
  /* const addUser = () => {
    setIsAdded(!isAdded);
  }; */
  /* const print = (arrayShowed, isAdded) => {
    let output;
    if (isAdded) {
      output = <p>✔</p>;
    } else {
      output = <p>+</p>;
    }
    showed = (
      <>
        <div className="print">
          <p id="game">{arrayShowed}</p>
          <button onClick={addUser} className="sumB">
            {output}
          </button>
        </div>
      </>
    );
  }; */

  return (
    <>
      {/* {print(arrayShowed, isAdded)}
      {showed} */}
      <AddButton isTouched={isTouched} arrayShowed={arrayShowed} addedArray={addedArray} handleAddedArray={handleAddedArray}  />
      <button className="clickB" onClick={handleSearchNow}>
        <b>Search Now</b>
      </button>
    </>
  );
};
