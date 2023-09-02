import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  html: {
    body: {
      height: "100%",
    },
  },
  bankingBackground: {
    backgroundColor: "#00D54B",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width:768px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  upperHole: {
    width: "200px",
    position: "relative",
  },
  upperColumn: {
    height: "130px",
    width: "100px",
    marginLeft: "20px",
    position: "absolute",
    marginTop: "5%",
    "@media (max-width:768px)": {
      marginTop: "10%",
    },
  },
  cloud: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bankPara: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "100px",
    "@media (max-width:768px)": {
      paddingTop: "10px",
    },
  },
  upperBankStairs: {
    width: "80px",
    height: "222px",
    marginLeft: "60px",
    marginTop: "200px",
    marginBottom: "80px",
    "@media (max-width:768px)": {
      marginTop: "80px",
      marginBottom: "10px",
    },
  },
  bankTrack1: {
    width: "240px",
    height: "166px",
    marginLeft: "77px",
    marginTop: "65px",
    "@media (max-width:768px)": {
      marginLeft: "7px",
      marginTop: "5px",
    },
  },
  bankingText: {
    color: "#FFF",
    fontFamily: "Agrandir",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "40px",
    marginBottom: "0px",
    "@media (max-width:768px)": {
      marginTop: "10px",
    },
  },
  bankingPara: {
    color: "#000",
    letterSpacing: "0.3px",
    fontFamily: "Agrandir",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "20px",
    width: "300px",
  },
  TextPara: {
    width: "300px",
    marginRight: "50px",
  },
  bankRamp2: {
    width: "300px",
    height: "200px",
  },
  bankPhoneDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "20%",
    marginLeft: "-146px",
    "@media (max-width:768px)": {
      paddingTop: "10px",
      marginLeft: "20px",
    },
  },
  phone: {
    width: "200px",
    height: "300px",
    "@media (max-width:768px)": {
      width: "180px",
      height: "200px",
    },
  },
  tube: {
    width: "100px",
    height: "100px",
  },
  TrackDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  track2: {
    width: "200px",
    height: "150px",
    "@media (max-width:768px)": {
      width: "100px",
      height: "100px",
    },
  },
  Ramp1: {
    width: "200px",
    height: "150px",
    "@media (max-width:768px)": {
      margin: "auto",
    },
  },
  bankCube: {
    width: "200px",
    height: "130px",
  },
  LowHole: {
    width: "200px",
    height: "30px",
  },
  stairs1: {
    width: "60px",
    height: "150px",
  },
  monster: {
    width: "100px",
    height: "60px",
  },
  monsterDiv: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "50%",
    "@media (max-width:768px)": {
      marginTop: "30px",
    },
  },
}));
