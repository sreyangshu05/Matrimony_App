import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  MenuItem,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import "./ProfileCreation.css"; 

const ProfileCreation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    fullName: "",
    dob: "",
    gender: "",
    location: "",
    preferences: "",
    bio: "",
    profilePicture: null,
  });

  const genders = ["Male", "Female", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Profile Created Successfully!");
  };

  const handleGoogleSignIn = () => {
    navigate("/signin"); // Navigate to Google Sign-In page
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "30px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Your Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                name="fullName"
                variant="outlined"
                fullWidth
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
                value={formData.dob}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Gender"
                name="gender"
                select
                variant="outlined"
                fullWidth
                required
                value={formData.gender}
                onChange={handleChange}
              >
                {genders.map((gender, index) => (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                name="location"
                variant="outlined"
                fullWidth
                required
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Partner Preferences"
                name="preferences"
                variant="outlined"
                multiline
                rows={2}
                fullWidth
                value={formData.preferences}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bio"
                name="bio"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formData.bio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <input
                accept="image/*"
                id="profile-picture-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="profile-picture-upload">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
                Upload Profile Picture
              </label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Create Profile
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            style={{ marginTop: "10px" }}
            onClick={handleGoogleSignIn}
          >
            Sign Up with Google
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ProfileCreation;
