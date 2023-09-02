import React from "react";
import { useStyles } from "./Styles";
import stockPhone from "../../Assets/Images/investing-stocks.png";
import bitcoin from "../../Assets/Images/investing-bitcoin.png";
import graph1 from "../../Assets/Images/investing-graph-1.png";
import graph2 from "../../Assets/Images/investing-graph-2.png";
import graph3 from "../../Assets/Images/investing-graph-3 1.png";
import app from "../../Assets/Images/App-white.png";
import google from "../../Assets/Images/Google-white.png";
import social from "../../Assets/Images/buttons.png";

const Investing = () => {
  const classes = useStyles();
  return (
    <div className={classes.investBackground}>
      <div className={classes.stockBitcoin}>
        <div className={classes.investUp}>
          <h4 className={classes.investText}>Investing</h4>
        </div>
        <div className={classes.fullDiv}>
          <div className={classes.investFullDiv}>
            <h4 className={classes.investHeader}>Stocks</h4>
            <p className={classes.investPara}>
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div className={classes.stockPhoneDiv}>
            <img
              src={stockPhone}
              alt="stockPhone"
              className={classes.stockPhone}
            />
            <img
              src={bitcoin}
              alt="stockPhone"
              className={classes.stockPhone}
            />
          </div>
          <div className={classes.investFullDiv}>
            <h4 className={classes.investHeader}>Bitcoin</h4>
            <p className={classes.investPara}>
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.footerDiv}>
        <div className={classes.graphContainer}>
          <div className={classes.firstGraphDiv}>
            <img src={graph1} alt="graph1" className={classes.firstGraph} />
          </div>
          <div className={classes.lastGraphDiv}>
            <img src={graph2} alt="graph2" className={classes.secGraph} />
            <img src={graph3} alt="graph3" className={classes.thirdGraph} />
          </div>
        </div>
      </div>
      <div className={classes.navDiv}>
        <div>
          <img src={app} alt="app" />
          <img src={google} alt="google" />
        </div>
        <div className={classes.descript}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </div>
        <div>
          <img src={social} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Investing;
