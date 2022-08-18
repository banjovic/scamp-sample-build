import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo/logo.svg";
// import PropTypes from "prop-types";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const drawerWidth = 340;
const pages = ["Home", "Resources", "Resources", "Pricing"];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Untitled UI
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          background: "#ffffff",
          borderBottom: "1px solid #f2f4f7",
          boxShadow: "none",
        }}
        component="nav"
      >
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            alt="Your logo."
            src={Logo}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#101828",
              textDecoration: "none",
            }}
          >
            Untitled UI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box
              component="img"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              alt="Your logo."
              src={Logo}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "#101828",
                textDecoration: "none",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Untitled UI
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#344054" }} />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "#667085",
                  display: "block",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" className="scamp-btn-secondary">
              Log in
            </Button>
            <Button
              color="inherit"
              variant="contained"
              className="scamp-btn-primary"
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

// NavBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default NavBar;
