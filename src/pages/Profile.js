import React, { useState } from "react";
import { Avatar, Typography, TextField, Button, Grid, Paper, Card, CardContent, CardActions } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Profile = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
  const [aboutMe, setAboutMe] = useState("Tell us something about yourself...");
  const [profileDetails, setProfileDetails] = useState({
    age: 25,
    gender: "Male",
    attributes: "Friendly, Hardworking, Adventurous",
  });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  return (
    <Grid container spacing={3} style={{ margin: "20px" }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Profile
        </Typography>
      </Grid>

      {/* Profile Section */}
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6">Profile</Typography>
            <Avatar
              style={{ margin: "10px auto", backgroundColor: "#3f51b5" }}
              src={profilePic}
            >
              <AccountCircle />
            </Avatar>
            <Button variant="contained" component="label" fullWidth>
              Upload New Picture
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </Button>
            <TextField
              label="About Me"
              multiline
              rows={4}
              value={aboutMe}
              onChange={handleAboutMeChange}
              variant="outlined"
              fullWidth
              style={{ marginTop: "10px" }}
            />
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              Age: {profileDetails.age}
            </Typography>
            <Typography variant="body2">Gender: {profileDetails.gender}</Typography>
            <Typography variant="body2">Attributes: {profileDetails.attributes}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Footer Section */}
      <Grid item xs={12}>
        <Paper style={{ padding: "10px", textAlign: "center" }}>
          <Typography variant="body2">
            &copy; 2024 Matrimony App. All Rights Reserved.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
