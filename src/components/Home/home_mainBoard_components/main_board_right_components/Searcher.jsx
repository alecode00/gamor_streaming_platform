import { PropTypes } from "prop-types";
export const Searcher = ({ search, handleOnChange }) => {
  Searcher.propTypes = {
    search: PropTypes.string,
    handleOnChange: PropTypes.func,
  };

  return (
    <>
      <input
        placeholder="Enter Game"
        type="text"
        value={search}
        onChange={handleOnChange}
      />
    </>
  );
};
