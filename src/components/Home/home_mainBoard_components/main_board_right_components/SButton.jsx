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
  arrayShowed,
  handleArrayShowed,
  category,
  games,
  search,
  platform,
}) => {
  SButton.propTypes = {
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

  const handleAddedArray = (newAddedArray) => {
    setAddedArray(newAddedArray);
  };
  //Manejando el buscador--------------------------------------------
  const handleSearchNow = () => {
    setIsTouched(!isTouched);

    for (let i = 0; i < games.length; i++) {
      if (
        games[i].name === search &&
        games[i].parent_platforms[0].platform.name === platform &&
        games[i].genres[0].name === category /* &&
        games.length === 0 */
      ) {
        handleArrayShowed([games[i].name]);
      }
    }
  };
  return (
    <>
      <AddButton
        isTouched={isTouched}
        arrayShowed={arrayShowed}
        addedArray={addedArray}
        handleAddedArray={handleAddedArray}
      />
      <button className="clickB" onClick={handleSearchNow}>
        <b>Search Now</b>
      </button>
    </>
  );
};
