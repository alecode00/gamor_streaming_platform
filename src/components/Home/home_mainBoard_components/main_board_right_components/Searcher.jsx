import { PropTypes } from "prop-types";
export const Searcher = ({ search, handleOnChange }) => {
  Searcher.propTypes = {
    search: PropTypes.string,
    handleOnChange: PropTypes.func,
  };

  return (
    <>
      <p>02. </p>
      <h3>Searching Game</h3>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleOnChange}
      />
    </>
  );
};
