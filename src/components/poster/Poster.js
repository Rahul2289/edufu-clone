import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./posterStyle";
import img from "../../images/Rectangle 70.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Poster = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.infoContainer}>
        <Typography
          className={classes.info1}
          sx={{ fontSize: 36, fontWeight: 600 }}
        >
          Welcome to Edufu Lorem ipsum and Cintent!
        </Typography>
        <Typography
          className={classes.info2}
          sx={{ fontSize: 26, fontWeight: 400 }}
        >
          Lorum ipsum dolao sit amet,consectetur adipiscing elit.Sit vitae eros
          aliquet congue.
        </Typography>
      </Box>
      <Box className={classes.tourContainer}>
        <Box className={classes.TitileContainer}>
          <Box>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "#292929" }}
            >
              Virtual Tour
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography
              ml={2}
              sx={{ fontSize: "16px", fontWeight: "400", color: "#0377EB" }}
            >
              View All
            </Typography>
            <ArrowRightAltIcon sx={{ color: "#0377EB", marginLeft: "10px" }} />
          </Box>
        </Box>
        {/* wrapper1 */}
        <Box className={classes.wrapper}>
          <Box className={classes.imgCon}>
            <img src={img} alt="img" />
          </Box>
          <Box className={classes.infoContainer1}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "400", color: "#292929" }}
            >
              Come to class with me!
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#525252" }}
            >
              Delhi University,Delhi
            </Typography>
          </Box>
        </Box>
        {/* wrapper1 */}
        <Box className={classes.wrapper}>
          <Box className={classes.imgCon}>
            <img src={img} alt="img" />
          </Box>
          <Box className={classes.infoContainer1}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "400", color: "#292929" }}
            >
              Come to class with me!
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#525252" }}
            >
              Delhi University,Delhi
            </Typography>
          </Box>
        </Box>
        {/* wrapper1 */}
        <Box className={classes.wrapper}>
          <Box className={classes.imgCon}>
            <img src={img} alt="img" />
          </Box>
          <Box className={classes.infoContainer1}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "400", color: "#292929" }}
            >
              Come to class with me!
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#525252" }}
            >
              Delhi University,Delhi
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster;
