import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

export const AddButton = ({
  isTouched,
  arrayShowed,
  addedArray,
  handleAddedArray,
}) => {
  AddButton.propTypes = {
    isTouched: PropTypes.bool,
    arrayShowed: PropTypes.array,
    addedArray: PropTypes.array,
    handleAddedArray: PropTypes.func,
  };
  const [isAdded, setIsAdded] = useState(false);

  const [indexArray, setIndexArray] = useState(0);

  useEffect(() => {
    verify();
  }, [isTouched]);

  const addUser = () => {
    console.log(`Entre en addUser`);
    setIsAdded(!isAdded);
    console.log(`Setee el estado contrario`);
    const nextAddedArray = addedArray.map((c, i) => {
      if (i == indexArray) {
        return (c = {
          ...c,
          state: !c.state,
        });
      } else {
        return c;
      }
    });
    console.log(`${nextAddedArray}`);
    handleAddedArray(nextAddedArray);
  };

  const print = (arrayShowed) => {
    let output;
    if (addedArray[indexArray].state) {
      output = <p>✔</p>;
    } else {
      output = <p>+</p>;
    }
    return (
      <>
        <div className="print">
          <p id="game">{arrayShowed}</p>
          <button onClick={addUser} className="sumB">
            {output}
          </button>
        </div>
      </>
    );
  };

  const verify = () => {
    let isFounded = false;
    console.log("Entre al verify");
    if (addedArray.length == 1) {
      console.log("El lenght fue 1");
      setIsAdded(false);
      setIndexArray(addedArray.length);
      handleAddedArray([
        ...addedArray,
        {
          name: arrayShowed,
          state: false,
        },
      ]);
      console.log("Actualice mis estados");
    } else {
      console.log("El lenght NO fue 1");
      for (let index = 0; index < addedArray.length; index++) {
        console.log(`El lenght de mi addedArray es: ${addedArray.length} `);
        console.log(
          `arrayShowed: ${arrayShowed} addedArray[index].name: ${addedArray[index].name}`
        );
        if (arrayShowed[0].trim() === addedArray[index].name.toString()) {
          setIsAdded(addedArray[index].state);
          setIndexArray(index);
          isFounded = true;
        }
      }
      if (isFounded == false) {
        console.log(`No encontrado actualizando los estados `);
        setIsAdded(false);
        setIndexArray(addedArray.length);
        handleAddedArray([
          ...addedArray,
          {
            name: arrayShowed,
            state: false,
          },
        ]);
      }
    }
  };

  return <>{print(arrayShowed)}</>;
};
