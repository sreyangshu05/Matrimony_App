import React from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container">
      {/* Hero Section */}
      <Container>
        <Grid container alignItems="center" spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6} className="text-section">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className="heading"
            >
              Welcome to Matrimony
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              className="tagline"
              paragraph
            >
              Find your perfect match today!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="cta-button"
              href="/profile-creation"
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} className="image-section">
            <img
              src="https://images.unsplash.com/photo-1489094889106-39069373d6ef?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Couple"
              className="landing-image"
            />
          </Grid>
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box className="info-section">
        <Typography variant="h4" className="section-heading">
          How It Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="info-card">
              <CardContent>
                <Typography variant="h6" className="info-title">
                  Create a Profile
                </Typography>
                <Typography variant="body2" className="info-text">
                  Register and create a detailed profile to help us match you with potential partners.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="info-card">
              <CardContent>
                <Typography variant="h6" className="info-title">
                  Explore Matches
                </Typography>
                <Typography variant="body2" className="info-text">
                  Browse through profiles and find people who share your interests and values.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="info-card">
              <CardContent>
                <Typography variant="h6" className="info-title">
                  Connect & Chat
                </Typography>
                <Typography variant="body2" className="info-text">
                  Start conversations and get to know your matches better.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box className="testimonials-section">
        <Typography variant="h4" className="section-heading">
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="testimonial-card">
              <CardContent>
                <Typography variant="body2" className="testimonial-text">
                  "This platform helped me find my soulmate! Highly recommended."
                </Typography>
                <Typography variant="h6" className="testimonial-name">
                  - John Doe
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="testimonial-card">
              <CardContent>
                <Typography variant="body2" className="testimonial-text">
                  "The process was simple and seamless. Great experience overall!"
                </Typography>
                <Typography variant="h6" className="testimonial-name">
                  - Jane Smith
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      {/* <Box className="footer">
        <Typography variant="body2" className="footer-text">
          &copy; {new Date().getFullYear()} Matrimony. All rights reserved.
        </Typography>
        <Box className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Home;
