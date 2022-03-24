import { makeStyles } from "@mui/styles";
import poster from "../../images/poster.png";
export const useStyles = makeStyles({
  container: {
    position: "relative",
    marginTop: "10px",
    height: "407px",
    background: `url(${poster})`,
  },
  infoContainer: {
    position: "absolute",
    color: "#FCFCFC",
    display: "flex",
    flexDirection: "column",
  },
  info1: {
    position: "absolute",
    width: 593,
    height: 85,
    top: "100px",
    left: "120px",
  },
  info2: {
    position: "absolute",
    width: "510px",
    height: "83.24px",
    left: "120px",
    top: "210px",
  },
  tourContainer: {
    position: "absolute",
    width: "380px",
    height: "348px",
    right: "50px",
    top: "60px",
    background: "#FCFCFC",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  TitileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "10px 20px",
    top: "10px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "10px 15px",
  },
  infoContainer1: {
    display: "flex",
    flexDirection: "column",
    width: "208px",
    height: "50px",
  },
  imgCon: {
    width: "160px",
    height: "78px",
  },
});
