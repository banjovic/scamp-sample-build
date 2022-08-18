import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const BaseContainer = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            height: "25vh",
            backgroundColor: "#F9FAFB",
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default BaseContainer;
