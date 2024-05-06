import { PropTypes } from "prop-types";

export const PlatformSelector = ({ handleSelectPlatform }) => {
  PlatformSelector.propTypes = {
    handleSelectPlatform: PropTypes.func,
  };

  return (
    <>
      <section>
        <div>
          <h3>01. </h3>
          <h4>Choose Platform</h4>
        </div>
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
