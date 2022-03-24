import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "66px",
    margin: "50px 0",
  },
  wrapper: {
    width: "80%",
    height: "100%",
    background: " #FCFCFC",
    border: " 1px solid #E3E3E3",
    boxSizing: "border-box",
    borderRadius: " 50px",
    margin: "0 100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    borderRadius: " 50px",
    padding: "0 15px",
    fontWeight: 400,
    fontSize: "16px",
    color: "#757575",
  },
});
