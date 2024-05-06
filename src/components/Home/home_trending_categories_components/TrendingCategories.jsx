import { PropTypes } from "prop-types";
import "./trendingCatg.css"

export const TrendingCategories = ({ handleChangeCategory }) => {

  TrendingCategories.propTypes = {
    handleChangeCategory: PropTypes.func,
  }

  const handleAsignAction = () => {
    handleChangeCategory("Action");
  }
  const handleAsignSports = () => {
    handleChangeCategory("Sports");
  }
  const handleAsignAdventure = () => {
    handleChangeCategory("Adventure");
  }
  const handleAsignArcade = () => {
    handleChangeCategory("Arcade");
  }
  const handleAsignFantasy = () => {
    handleChangeCategory("Fantasy");
  }
  const handleAsignStrategy = () => {
    handleChangeCategory("Strategy");
  }
  const handleAsignShooter = () => {
    handleChangeCategory("Shooter");
  }
  const handleAsignAll = () => {
    handleChangeCategory("All");
  }


  return (
    <>
      <h3>Trending Categories</h3>

      <div className="buttonsDiv">
        <div className="firstRowButtons">
          <button onClick={handleAsignAction} className="button-trend">
              <p>/1</p>
              <h4>Action Games</h4>
          </button>

          <button onClick={handleAsignSports} className="button-trend">
              <p>/2</p>
              <h4>Sports Games</h4>
          </button>

          <button onClick={handleAsignAdventure} className="button-trend">
              <p>/3</p>
              <h4>Adventure Games</h4>
          </button>

          <button onClick={handleAsignArcade} className="button-trend">
              <p>/4</p>
              <h4>Arcade Games</h4>
          </button>
        </div>

        <div className="secondRowButtons">
        <button onClick={handleAsignFantasy} className="button-trend">
            <p>/5</p>
            <h4>Fantasy Games</h4>
        </button>

        <button onClick={handleAsignStrategy} className="button-trend">
            <p>/6</p>
            <h4>Strategy Games</h4>
        </button>

        <button onClick={handleAsignShooter} className="button-trend">
            <p>/7</p>
            <h4>Shooter Games</h4>
        </button>

        <button onClick={handleAsignAll} className="button-trend" >
            <p>View All</p>
            <h4>All Categories</h4>
        </button>
        </div>
      </div>
    </>
  )
}
