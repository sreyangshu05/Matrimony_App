import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../firebase"; // Replace with your Firebase authentication function
import "./SigninSignup.css"; // Ensure this CSS file is in the same directory

const SigninSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} className="MuiPaper-root">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="MuiTypography-h4"
        >
          {isSignUp ? "Create an Account" : "Sign In"}
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="MuiBox-root"
        >
          {isSignUp && (
            <>
              <div className="input-group">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                />
              </div>
            </>
          )}

          <div className="input-group">
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </div>
          <div className="input-group">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </div>
          {isSignUp && (
            <div className="input-group">
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="MuiButton-containedPrimary"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            className="MuiButton-outlined"
            onClick={signInWithGoogle}
          >
            {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
          </Button>
        </Box>

        <Grid container justifyContent="center" className="MuiGrid-container">
          <Typography>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <Button color="primary" onClick={toggleMode}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </Typography>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SigninSignup;
