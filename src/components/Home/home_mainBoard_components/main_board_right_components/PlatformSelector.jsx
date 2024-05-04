import { PropTypes } from "prop-types";

export const PlatformSelector = ({ setPlatform }) => {
  PlatformSelector.propTypes = {
    setPlatform: PropTypes.func,
  };

  //Cambiando la plataforma
  const handleSelectPlatformPC = (event) => {
    event.preventDefault();
    setPlatform("PC");
  };
  const handleSelectPlatformPS4 = (event) => {
    event.preventDefault();
    setPlatform("PS4");
  };
  const handleSelectPlatformXBOX = (event) => {
    event.preventDefault();
    setPlatform("XBOX");
  };

  return (
    <>
      <section>
        <p>01. </p>
        <h3>Choose Platform</h3>
        <a href="#" onClick={handleSelectPlatformPC}>
          PC
        </a>
        <a href="#" onClick={handleSelectPlatformPS4}>
          PS4
        </a>
        <a href="#" onClick={handleSelectPlatformXBOX}>
          XBOX
        </a>
      </section>
    </>
  );
};
