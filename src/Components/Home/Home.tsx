import React from "react";
import Payments from "../Payments/Payments";
import Banking from "../Banking/Banking";
import CashCard from "../CashCard/CashCard";
import Investing from "../Investing/Investing";

const Home = () => {
  return (
    <div>
      <Payments />
      <Banking />
      <CashCard />
      <Investing />
    </div>
  );
};

export default Home;
