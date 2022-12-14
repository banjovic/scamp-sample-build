import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SimpleContainer = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            height: "75vh",
            backgroundColor: "#ffffff",
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SimpleContainer;
