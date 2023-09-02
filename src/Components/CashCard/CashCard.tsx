import React from "react";
import { useStyles } from "./Styles";
import stair1 from "../../Assets/Images/boost-stairs-1.png";
import stairs2 from "../../Assets/Images/boost-stairs-2.png";
import phone from "../../Assets/Images/boost-phone.png";
import burger from "../../Assets/Images/boost-burger.png";
import card from "../../Assets/Images/boost-card.png";
import hand from "../../Assets/Images/boost-hand.png";
import coffee from "../../Assets/Images/boost-coffee.png";
import shoe from "../../Assets/Images/boost-shoe.png";

const CashCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.cashBackground}>
      <div className={classes.twoStairs}>
        <div>
          <img src={stairs2} alt="stair2" className={classes.Stair1} />
        </div>
        <div>
          <img src={stair1} alt="stair2" className={classes.Stairs2} />
        </div>
      </div>
      <div>
        <div className={classes.boostDiv}>
          <h4 className={classes.boostText}>Cash Card & Boost</h4>
          <p className={classes.boostPara}>
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <div className={classes.smallIcons}>
          <img src={phone} alt="phone" className={classes.phone} />
          <img src={burger} alt="burger" className={classes.burger} />
          <img src={card} alt="boostCard" className={classes.boostCard} />
          <img src={hand} alt="boostCard" className={classes.hand} />
          <img src={coffee} alt="boostCard" className={classes.coffee} />
          <img src={shoe} alt="boostCard" className={classes.shoe} />
        </div>
      </div>
    </div>
  );
};

export default CashCard;
