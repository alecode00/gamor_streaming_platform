import { MainBoardLeft } from "./home_mainBoard_components/MainBoardLeft";
import { MainBoardCenter } from "./home_mainBoard_components/MainBoardCenter";
import { MainBoardRight } from "./home_mainBoard_components/MainBoardRight";
import { TrendingCategories } from "./home_trending_categories_components/TrendingCategories";

export const Home = () => {
  return (
    <>
      <section className="mainBoard" >
        <MainBoardLeft />
        <MainBoardCenter />
        <MainBoardRight />
      </section>
      <section className="trendingCategories" >
        <TrendingCategories />
      </section>
    </>
  );
};
