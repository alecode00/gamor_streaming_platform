import { MainBoardLeft } from "./home_mainBoard_components/MainBoardLeft";
import { MainBoardCenter } from "./home_mainBoard_components/MainBoardCenter";
import { MainBoardRight } from "./home_mainBoard_components/MainBoardRight";
import { TrendingCategories } from "./home_trending_categories_components/TrendingCategories";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { PropTypes } from "prop-types";
import "./home.css";

export const Home = ({ handleImageClassDiv, imageClassDiv }) => {
  Home.propTypes = {
    handleImageClassDiv: PropTypes.func,
    imageClassDiv: PropTypes.string,
  };
  const { theme } = useContext(ThemeContext);

  const [category, setCategory] = useState("Action");

  const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const imageUrlSelect = () => {
    if (theme == "light") {
      handleImageClassDiv("mainBoardCenterLight");
    } else {
      handleImageClassDiv("mainBoardCenterDark");
    }
  };
  useEffect(() => {
    imageUrlSelect();
  }, [theme]);

  return (
    <>
      <div className={theme}>
        <section className="mainBoard1">
          <section className="mainBoardLeft">
            <MainBoardLeft />
          </section>
          <section className={imageClassDiv}>
            <MainBoardCenter />
          </section>
          <section className="mainBoardRight">
            <MainBoardRight category={category} />
          </section>
        </section>
      </div>
      <section className="trendingCategories">
        <TrendingCategories handleChangeCategory={handleChangeCategory} />
        {console.log(`La categoria seleccionada es: ${category}`)}
      </section>
    </>
  );
};
