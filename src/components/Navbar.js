import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">
          Matrimony
        </Typography>
        <div className="nav-links">
          <Button color="inherit" component={Link} to="/" className="nav-button">
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/signin"
            className="nav-button"
          >
            Sign In
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/dashboard"
            className="nav-button"
          >
            Dashboard
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
