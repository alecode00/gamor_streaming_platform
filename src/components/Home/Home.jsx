import { MainBoardLeft } from "./home_mainBoard_components/MainBoardLeft";
import { MainBoardCenter } from "./home_mainBoard_components/MainBoardCenter";
import { MainBoardRight } from "./home_mainBoard_components/MainBoardRight";
import { TrendingCategories } from "./home_trending_categories_components/TrendingCategories";
import { useState } from "react";

export const Home = () => {

  const [category, setCategory] = useState("Action")
  
  const handleChangeCategory = (newCategory) =>{
    setCategory(newCategory);
  }

  return (
    <>
      <section className="mainBoard" >
        <MainBoardLeft />
        <MainBoardCenter />
        <MainBoardRight category={category} />
      </section>
      <section className="trendingCategories" >
        <TrendingCategories handleChangeCategory={handleChangeCategory} />
        {console.log(`La categoria seleccionada es: ${category}`)}
      </section>
    </>
  );
};
