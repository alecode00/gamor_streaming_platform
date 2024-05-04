import { PropTypes } from "prop-types";
export const SButton = ({ handleSearchNow }) => {
  SButton.propTypes = {
    handleSearchNow: PropTypes.func,
  };





  
  return (
    <>
      <button onClick={handleSearchNow}>Search Now</button>
    </>
  );
};
