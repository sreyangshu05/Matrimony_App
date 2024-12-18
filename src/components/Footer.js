import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import "./Footer.css"

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.dark", color: "white", py: 3, mt: "auto" }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Matrimony App
        </Typography>
        <Typography variant="body2" align="center" color="inherit">
          © {new Date().getFullYear()} Matrimony. All rights reserved.
        </Typography>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
          <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
