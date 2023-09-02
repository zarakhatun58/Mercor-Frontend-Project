import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  investBackground: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
  },
  stockBitcoin: {
    width: "100%",
    backgroundColor: "#00D54B",
    height: "380px",
  },
  footerDiv: {
    width: "100%",
    backgroundColor: "white",
  },
  investText: {
    color: "#FFF",
    fontFamily: "Agrandir",
    fontSize: "40px",
    textAlign: "center",
    margin: "auto",
  },
  investUp: {
    paddingTop: "50px",
  },
  investPara: {
    color: "#000",
    fontFamily: " Agrandir",
    fontSize: "16px",
  },
  investHeader: {
    color: "#000",
    fontFamily: " Agrandir",
    fontSize: "40px",
    marginBottom: "0px",
    lineHeight: "30px",
  },
  investFullDiv: {
    width: "300px",
    marginBottom: "30px",
    "@media (max-width:768px)": {
      width: "300px",
      marginBottom: "10px",
    },
  },
  stockPhone: {
    width: "150px",
    "@media (max-width:768px)": {
      width: "100px",
    },
  },
  stockPhoneDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: "5px",
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  fullDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: "50px",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      paddingTop: "10px",
    },
  },
  firstGraph: {
    width: "480px",
    "@media (max-width:768px)": {
      width: "180px",
      height: "80px",
      marginTop: "95%",
    },
  },
  secGraph: {
    width: "330px",
    height: "200px",
    "@media (max-width:768px)": {
      width: "280px",
      height: "100px",
      marginTop: "30%",
    },
  },
  thirdGraph: {
    width: "330px",
    height: "170px",
    "@media (max-width:768px)": {
      width: "280px",
      height: "100px",
    },
  },
  firstGraphDiv: {
    width: "400px",
    "@media (max-width:768px)": {
      width: "280px",
      marginBottom: "38%",
    },
  },
  lastGraphDiv: {
    width: "330px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "0%",
    marginTop: "-13%",
    "@media (max-width:768px)": {
      width: "280px",
      height: "200px",
      position: "unset",
      marginTop: "20px",
    },
  },
  graphContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  navDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: "50px",
    paddingRight: "50px",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  descript: {
    width: "400px",
    fontSize: "10px",
    marginLeft: "150px",
    "@media (max-width:768px)": {
      width: "250px",
      fontSize: "10px",
      marginLeft: "0px",
      marginTop: "30px",
      marginBottom: "30px",
      textAlign: "center",
    },
  },
}));
