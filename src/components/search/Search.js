import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, IconButton } from "@mui/material";
import { useStyles } from "./searchStyles";
const Search = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Box
          sx={{ width: "73%", height: "90%", borderRight: "1px solid #757575" }}
        >
          <input
            className={classes.input}
            placeholder="Course,institute,job Title,Location ..."
          />
        </Box>
        <Box sx={{ borderLeft: "1px solid #757575" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              color: "#757575",
              marginLeft: "15px",
              border: "1px solid #757575",
            }}
          >
            Institute
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              color: "#757575",
              marginLeft: "15px",
              border: "1px solid #757575",
            }}
          >
            Jobs
          </Button>
          <IconButton
            variant="contained"
            style={{
              background: "#0377EB",
              borderRadius: "50%",
              margin: " 0 15px",
              color: "white",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
