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
    setIsAdded(!isAdded);

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

    if (addedArray.length == 1) {
      setIsAdded(false);
      setIndexArray(addedArray.length);
      handleAddedArray([
        ...addedArray,
        {
          name: arrayShowed,
          state: false,
        },
      ]);
    } else {
      for (let index = 0; index < addedArray.length; index++) {
        if (arrayShowed[0] === addedArray[index].name.toString()) {
          setIsAdded(addedArray[index].state);
          setIndexArray(index);
          isFounded = true;
        }
      }
      if (isFounded == false) {
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
