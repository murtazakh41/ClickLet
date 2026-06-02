import React from "react";

import Hero from "../components/Hero";
import Shopscrad from "../components/Shopscrad";
import BestSellers from "../components/BestSellers";
import MarqueePage from "../components/MarqueePage";
import ProudectDittles from "../components/ProudectDittles";
import CustomrReviews from "../components/CustomrReviews";
import HlapLine from "../components/HlapLine";

const Home = () => {
  return (
    <>
      <Hero />
     
      <Shopscrad />
      <BestSellers />
      <MarqueePage />
      <ProudectDittles />
      <CustomrReviews />
      <HlapLine />
    </>
  );
};

export default Home;