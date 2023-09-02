import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  cashBackground: {
    backgroundColor: "black",
    width: "100%",
  },
  twoStairs: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      position: "unset",
    },
  },
  Stairs2: {
    width: "820px",
    height: "620px",
    "@media (max-width:768px)": {
      width: "220px",
      height: "220px",
    },
  },
  Stair1: {
    width: "400px",
    marginBottom: "0px",
    "@media (max-width:768px)": {
      width: "200px",
      marginBottom: "0px",
    },
  },
  boostText: {
    color: "#00D54B",
    fontFamily: " Agrandir",
    fontSize: "40px",
    marginBottom: "0px",
    lineHeight: "30px",
  },
  boostPara: {
    color: "#FFF",
    fontFamily: " Agrandir",
    fontSize: "16px",
  },
  boostDiv: {
    width: "300px",
    position: "absolute",
    marginTop: "-35%",
    marginLeft: "18%",
    "@media (max-width:768px)": {
      width: "300px",
      position: "unset",
      marginTop: "20px",
      marginLeft: "18px",
    },
  },
  phone: {
    width: "200px",
    height: "400px",
    position: "absolute",
    marginTop: "-39%",
    marginLeft: "-10%",
  },
  smallIcons: {
    display: "block",
    "@media (max-width:768px)": {
      display: "none",
    },
  },
  burger: {
    width: "70px",
    height: "80px",
    position: "absolute",
    marginTop: "-23%",
    marginLeft: "15%",
  },
  boostCard: {
    width: "70px",
    height: "130px",
    position: "absolute",
    marginTop: "-38%",
    marginLeft: "23%",
  },
  hand: {
    width: "70px",
    height: "90px",
    position: "absolute",
    marginTop: "-45%",
    marginLeft: "31%",
  },
  coffee: {
    width: "80px",
    height: "100px",
    position: "absolute",
    marginTop: "-16%",
    marginLeft: "22%",
  },
  shoe: {
    width: "80px",
    height: "100px",
    position: "absolute",
    marginTop: "-25%",
    marginLeft: "42%",
  },
}));
