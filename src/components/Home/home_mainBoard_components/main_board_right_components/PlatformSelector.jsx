import { PropTypes } from "prop-types";

export const PlatformSelector = ({ handleSelectPlatform }) => {
  PlatformSelector.propTypes = {
    handleSelectPlatform: PropTypes.func,
  };

 

  return (
    <>
      <section>
        <p>01. </p>
        <h3>Choose Platform</h3>
        <a id="PC" href="#" onClick={handleSelectPlatform}>
          PC
        </a>
        <a id="PS4" href="#" onClick={handleSelectPlatform}>
          PS4
        </a>
        <a id="XBOX" href="#" onClick={handleSelectPlatform}>
          XBOX
        </a>
      </section>
    </>
  );
};
