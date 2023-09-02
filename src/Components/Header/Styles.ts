import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  navLinks: {
    marginLeft: "150px",
    display: "flex",
    flexGrow: "1",
    "@media (max-width:768px)": {
      marginLeft: "10px",
      display: "flex",
      flexDirection: "column",
    },
    // "@media (max-width:1600px)": {
    //   marginLeft: "50px",
    //   display: "flex",
    //   flexDirection: "row",
    // },
  },
  cube: {
    width: "74px",
    height: "73.212px",
    flexShrink: "0",
  },
  cubes: {
    width: "188px",
    height: "176px",
    flexShrink: "0",
    "@media (max-width:768px)": {
      width: "100px",
      height: "100px",
    },
  },
  pillar: {
    width: "188px",
    height: "176px",
    flexShrink: "0",
    marginTop: "80px",
  },
  cash: {
    width: "400px",
    height: "100px",
    position: "relative",
    marginBottom: "50px",
    "@media (max-width:768px)": {
      width: "250px",
      marginBottom: "50px",
      marginTop: "-200px",
    },
  },
  app: {
    width: "400px",
    height: "100px",
    position: "absolute",
    top: "65%",
    "@media (max-width:768px)": {
      width: "250px",
      top: "90%",
    },
  },
  mobile: {
    width: " 370px",
    height: "400px",
    flexShrink: "0",
    position: "absolute",
    marginLeft: "70px",
    marginTop: "80px",
    "@media (max-width:768px)": {
      marginLeft: "0px",
      width: " 280px",
      height: "400px",
    },
  },
  cashDiv: {
    display: "flex",
    width: "511px",
    height: "500px",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: "0",
    "@media (max-width:768px)": {
      display: "flex",
      width: "300px",
      height: "400px",
      flexDirection: "column",
      marginTop: "30px",
    },
  },
  storeDiv: {
    "@media (max-width:768px)": {
      marginTop: "30px",
      marginLeft: "0px",
    },
  },
  pillarDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexShrink: "0",
    marginLeft: "150px",
    marginRight: "250px",
    marginTop: "-50px",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "30px",
    },
  },
  stairs: {
    width: "200px",
    height: "260px",
    lexShrink: "0",
    "@media (max-width:768px)": {
      width: "100px",
      height: "150px",
    },
  },
  cubeDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "150px",
    marginRight: "150px",
    "@media (max-width:768px)": {
      marginLeft: "10px",
      marginRight: "10px",
      display: "flex",
      flexDirection: "column",
    },
  },
  descText: {
    color: "#B6B6B6",
    fontFamily: "Mulish",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "13px",
    width: "363px",
    "@media (max-width:768px)": {
      width: "auto",
    },
  },
  lowerDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "-80px",
    "@media (max-width:768px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  logo: {
    flexGrow: "0",
    cursor: "pointer",
  },
  eyeLogo: {
    flexGrow: "0",
    cursor: "pointer",
  },
  link: {
    lexGrow: "1",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  social: {
    display: "flex",
    justifyContent: "space-between",
    width: "120px",
    height: "25px",
    marginTop: "25px",
    "@media (max-width:768px)": {
      margin: "auto",
    },
  },
  Header: {
    backgroundColor: "black",
    width: "100%",
    maxWidth: "100%",
    color: "white",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
}));
