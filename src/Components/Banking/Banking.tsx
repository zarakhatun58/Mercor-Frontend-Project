import React from "react";
import hole from "../../Assets/Images/banking-hole.png";
import upperColumn from "../../Assets/Images/banking-column.png";
import bankStairs from "../../Assets/Images/banking-stairs-2.png";
import bankTrack1 from "../../Assets/Images/banking-track-1.png";
import bankRamp2 from "../../Assets/Images/banking-ramp-2.png";
import phone from "../../Assets/Images/banking-phone.png";
import tube from "../../Assets/Images/banking-tube.png";
import track2 from "../../Assets/Images/banking-track-2.png";
import Ramp1 from "../../Assets/Images/banking-ramp-1.png";
import bankCube from "../../Assets/Images/banking-cubes.png";
import LowHole from "../../Assets/Images/banking-hole.png";
import stairs1 from "../../Assets/Images/banking-stairs-1.png";
import monster from "../../Assets/Images/banking-monster.png";

import { useStyles } from "./Styles";

const Banking = () => {
  const classes = useStyles();
  return (
    <div className={classes.bankingBackground}>
      <div className={classes.mainDiv}>
        <div className={classes.cloud}>
          <img src={hole} alt="hole" className={classes.upperHole} />
          <img src={upperColumn} alt="hole" className={classes.upperColumn} />
          <img
            src={bankStairs}
            alt="hole"
            className={classes.upperBankStairs}
          />
        </div>
        <div className={classes.bankPara}>
          <img src={bankTrack1} alt="hole" className={classes.bankTrack1} />
          <div className={classes.TextPara}>
            <h4 className={classes.bankingText}>Banking</h4>
            <p className={classes.bankingPara}>
              Receive your paycheck, tax returns, and other direct deposits up
              to two days early using your Cash App routing and account number.
            </p>
          </div>
          <div>
            <img src={bankRamp2} alt="" className={classes.bankRamp2} />
          </div>
        </div>
        <div className={classes.bankPhoneDiv}>
          <img src={phone} alt="phone" className={classes.phone} />
          <img src={tube} alt="phone" className={classes.tube} />
        </div>
        <div className={classes.TrackDiv}>
        <img src={track2} alt="phone" className={classes.track2} />
        <img src={Ramp1} alt="phone" className={classes.Ramp1} />
        <img src={bankCube} alt="phone" className={classes.bankCube} />
        <img src={LowHole} alt="phone" className={classes.LowHole} />
        </div>
        <div className={classes.monsterDiv}>
        <img src={stairs1} alt="phone" className={classes.stairs1} />
        <img src={monster} alt="monster" className={classes.monster} />
        </div>
      </div>
    </div>
  );
};

export default Banking;
