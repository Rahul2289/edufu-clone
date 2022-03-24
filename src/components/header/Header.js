import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import logo from "../../images/logo.png";
import { useStyles } from "./headerStyle";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      sx={{ background: "#FCFCFC", position: "static" }}
      className={classes.appbar}
    >
      <Toolbar className={classes.Toolbar}>
        <Box ml="90px">
          <img className={classes.img} src={logo} alt="logo" />
        </Box>

        <Box className={classes.middle}>
          <Typography ml={"50px"} mr={"50px"} className={classes.text}>
            Virtual Tour
          </Typography>
          <Typography ml={"50px"} mr={"50px"} className={classes.text}>
            Blogs
          </Typography>
          <Typography ml={"50px"} mr={"50px"} className={classes.text}>
            Institutions
          </Typography>
          <Typography
            ml={"50px"}
            mr={"50px"}
            color="#0377EB"
            className={classes.text}
          >
            Jobs
          </Typography>
        </Box>
        <Box className={classes.last}>
          <Box className={classes.icon}>
            <SearchOutlinedIcon />
          </Box>
          <Box className={classes.icon}>
            <MessageOutlinedIcon />
          </Box>
          <Box className={classes.icon}>
            <NotificationsNoneOutlinedIcon />
          </Box>

          <Box sx={{ minWidth: 120 }} ml={"30px"}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Account</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Account"
              >
                <MenuItem>Account</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
