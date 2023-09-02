import React from "react";
import { useStyles } from "./Styles";
import phone from "../../Assets/Images/payments-phone 1.png";
import paymentsColumns from "../../Assets/Images/payments-column.png";
import pillarMedium from "../../Assets/Images/payments-pillar-medium.png";
import pillarSmall from "../../Assets/Images/payments-pillar-small.png";
import pillarLarge from "../../Assets/Images/payments-column-big.png";

const Payments = () => {
  const classes = useStyles();
  return (
    <div className={classes.paymentBackground}>
      <div className={classes.phoneContent}>
        <div className={classes.paymentDiv}>
          <h4 className={classes.payment}>Payments</h4>
          <p className={classes.para}>
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <div className={classes.phone}>
          <img src={phone} alt="phone" className={classes.phone} />
        </div>
        <div className={classes.FirstDiv}>
          <img
            src={pillarMedium}
            alt="pillarMedium"
            className={classes.phone1stPillar}
          />
          <img
            src={pillarMedium}
            alt="pillarMedium"
            className={classes.phone2ndPillar}
          />
        </div>
      </div>
      <div className={classes.pillarDiv}>
        <div className={classes.FirstSection}>
          <img
            src={paymentsColumns}
            alt="paymentsColumns"
            className={classes.firstLargePillar}
          />
          <img
            src={pillarMedium}
            alt="pillarMedium"
            className={classes.secLargePillar}
          />
          <img
            src={pillarSmall}
            alt="pillarSmall"
            className={classes.thirdSmallPillar}
          />
        </div>
        <div className={classes.pillarFirstDiv}>
          <img
            src={pillarMedium}
            alt="pillarMedium"
            className={classes.mediumPillar}
          />
          <img
            src={pillarSmall}
            alt="pillarSmall"
            className={classes.midSmallPillar}
          />
          <img
            src={pillarMedium}
            alt="pillarMedium"
            className={classes.mediumPillar}
          />
        </div>
        <div className={classes.pillarDivBig}>
          <img
            src={pillarLarge}
            alt="paymentsColumns"
            className={classes.bigFirstColumn}
          />
          <img
            src={pillarLarge}
            alt="paymentsColumns"
            className={classes.bigColumn}
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;
