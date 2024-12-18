import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { BarChart, Notifications, AccountCircle, Help, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
  const [aboutMe, setAboutMe] = useState("Tell us something about yourself...");
  const [profileDetails, setProfileDetails] = useState({
    age: 25,
    gender: "Male",
    attributes: "Friendly, Hardworking, Adventurous",
  });

  const navigate = useNavigate();

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

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

  const handleViewMatches = () => {
    navigate("/matches"); // Use navigate to redirect to Matches page
  };

  return (
    <Grid container spacing={3} style={{ margin: "20px" }}>
      {/* Top Section */}
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Your Dashboard
        </Typography>
      </Grid>

      {/* Profile Section */}
      <Grid item xs={12} md={4}>
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
          <CardActions>
            <Button size="small" color="primary">
              View Profile
            </Button>
            {/* Top-right dropdown */}
            <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
              <Avatar
                onClick={handleDropdownClick}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#3f51b5",
                  width: "40px",
                  height: "40px",
                }}
                src={profilePic}
              />
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleDropdownClose}>
                <MenuItem onClick={handleDropdownClose}>
                  <Help style={{ marginRight: "10px" }} />
                  Help
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <Settings style={{ marginRight: "10px" }} />
                  Settings
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <AccountCircle style={{ marginRight: "10px" }} />
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </CardActions>
        </Card>
      </Grid>

      {/* Matches Section */}
      <Grid item xs={12} md={4}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6">My Matches</Typography>
            <Avatar style={{ margin: "10px auto", backgroundColor: "#f50057" }}>
              <BarChart />
            </Avatar>
            <Typography variant="body2">Explore your matches and connect with others.</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleViewMatches}>
              View Matches
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Notifications Section */}
      <Grid item xs={12} md={4}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6">Notifications</Typography>
            <Avatar style={{ margin: "10px auto", backgroundColor: "#4caf50" }}>
              <Notifications />
            </Avatar>
            <Typography variant="body2">Stay updated with the latest alerts.</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View Notifications
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Footer Section */}
      {/* <Grid item xs={12}>
        <Paper style={{ padding: "10px", textAlign: "center" }}>
          <Typography variant="body2">
            &copy; 2024 Matrimony App. All Rights Reserved.
          </Typography>
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;
