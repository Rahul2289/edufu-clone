import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  appbar: {
    height: 80,
    padding: 10,
  },
  Toolbar: {
    display: "flex",
    color: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    height: 36,
    width: 173.79,
    cursor: "pointer",
  },
  middle: { display: "flex" },
  text: {
    fontSize: 18,
    fontWeight: 400,
    color: "#757575",
    cursor: "pointer",
  },
  last: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginLeft: "30px",
    color: " #757575",
    cursor: "pointer",
  },
});
