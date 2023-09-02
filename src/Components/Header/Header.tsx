import React from "react";
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import { useStyles } from "./Styles";
import logo from "../../Assets/Images/logo.png";
import eye from "../../Assets/Images/eye.png";
import introCube1 from "../../Assets/Images/intro-cube 1.png";
import introStairs from "../../Assets/Images/intro-stairs 1.png";
import cash from "../../Assets/Images/CASH.png";
import app from "../../Assets/Images/APP.png";
import mobile from "../../Assets/Images/intro-phone 1.png";
import cubes from "../../Assets/Images/intro-cubes 1.png";
import pillar from "../../Assets/Images/intro-pillar 1.png";
import appStore from "../../Assets/Images/App Store.png";
import google from "../../Assets/Images/Google Play.png";
import vector from "../../Assets/Images/Vector.png";
import chart from "../../Assets/Images/chart.png";
import tweeter from "../../Assets/Images/tweeter.png";
import instagram from "../../Assets/Images/instagram.png";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar style={{ backgroundColor: "black" }}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.navLinks}>
            <Link to="/signIn" className={classes.link}>
              SIGN IN
            </Link>
            <Link to="/legal" className={classes.link}>
              LEGAL
            </Link>
            <Link to="/licenses" className={classes.link}>
              LICENSES
            </Link>
            <Link to="/security" className={classes.link}>
              SECURITY
            </Link>
            <Link to="/careers" className={classes.link}>
              CAREERS
            </Link>
            <Link to="/press" className={classes.link}>
              PRESS
            </Link>
            <Link to="/support" className={classes.link}>
              SUPPORT
            </Link>
            <Link to="/status" className={classes.link}>
              STATUS
            </Link>
            <Link to="/codeBlog" className={classes.link}>
              CODEBLOG
            </Link>
          </div>
          <div className={classes.eyeLogo}>
            <img src={eye} alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.cubeDiv}>
        <img src={introCube1} alt="cube" className={classes.cube} />
        <div className={classes.cashDiv}>
          <img src={cash} alt="cash" className={classes.cash} />
          <img src={mobile} alt="cash" className={classes.mobile} />
          <img src={app} alt="cash" className={classes.app} />
        </div>
        <img src={introStairs} alt="cube" className={classes.stairs} />
      </div>
      <div className={classes.pillarDiv}>
        <img src={cubes} alt="cube" className={classes.cubes} />
        <img src={pillar} alt="cube" className={classes.pillar} />
      </div>
      <div className={classes.lowerDiv}>
        <div className={classes.storeDiv}>
          <img src={appStore} alt="app store" />
          <img src={google} alt="app store" />
        </div>
        <div>
          <img src={vector} alt="vector" />
        </div>
        <div className={classes.descText}>
          <p>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
        </div>
        <div className={classes.social}>
          <img src={chart} alt="vector" />
          <img src={tweeter} alt="tweeter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Header;
