import { PropTypes } from "prop-types";

export const TrendingCategories = ({handleChangeCategory}) => {

  TrendingCategories.propTypes = {
    handleChangeCategory: PropTypes.func,
  }

  const handleAsignAction = () =>{
    handleChangeCategory("Action");
  }

  return (
    <>
        <h3>Trending Categories</h3>

        <button onClick={handleAsignAction} >
          <div>
            <p>/1</p>
            <h4>Action Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>/2</p>
            <h4>Sports Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>/3</p>
            <h4>adventure Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>/4</p>
            <h4>Arcade Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>/5</p>
            <h4>Fantasy Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>/6</p>
            <h4>Strategy Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>/7</p>
            <h4>Shooter Games</h4>
          </div>
        </button>

        <button>
          <div>
            <p>View All</p>
            <h4>All Categories</h4>
          </div>
        </button>
    </>
  )
}
