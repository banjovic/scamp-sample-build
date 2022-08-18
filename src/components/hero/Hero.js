import React from "react";
import "../Components.scss";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box className="hero-wrapper">
      <Typography className="hero-title font-weight-600">Our blog</Typography>
      <Typography
        variant="h2"
        component="div"
        className="hero-subtitle font-weight-600"
      >
        Resources and insights
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        className="hero-description font-weight-400"
      >
        The latest industry news, interviews, technologies, and resources.
      </Typography>
    </Box>
  );
};

export default Hero;
