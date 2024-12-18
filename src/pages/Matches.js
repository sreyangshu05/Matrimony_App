import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { BarChart } from "@mui/icons-material";
import "./Matches.css"; // Import CSS for styling

const Matches = () => {
  const [matches, setMatches] = useState([
    { id: 1, name: "John Doe", age: 28, description: "Adventurous and friendly", pic: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", age: 24, description: "Loves hiking and coding", pic: "https://via.placeholder.com/150" },
    { id: 3, name: "Tom Lee", age: 30, description: "Outdoor enthusiast", pic: "https://via.placeholder.com/150" },
    { id: 4, name: "Emily Brown", age: 26, description: "Coffee lover and traveller", pic: "https://via.placeholder.com/150" },
    // Add more profiles as needed
  ]);

  const [page, setPage] = useState(1);
  const matchesPerPage = 10;

  const handlePageChange = (direction) => {
    setPage(page + direction);
  };

  const currentMatches = matches.slice((page - 1) * matchesPerPage, page * matchesPerPage);

  return (
    <Grid container spacing={3} style={{ margin: "20px" }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          My Matches
        </Typography>
      </Grid>

      {currentMatches.map((match) => (
        <Grid item xs={12} md={4} key={match.id}>
          <Card elevation={3}>
            <CardContent>
              <Avatar style={{ margin: "10px auto" }} src={match.pic} />
              <Typography variant="h6">{match.name}</Typography>
              <Typography variant="body2">Age: {match.age}</Typography>
              <Typography variant="body2">{match.description}</Typography>
            </CardContent>
            <Button size="small" color="primary" fullWidth>
              View More
            </Button>
          </Card>
        </Grid>
      ))}

      <Grid item xs={12}>
        <div className="pagination">
          <Button
            onClick={() => handlePageChange(-1)}
            disabled={page === 1}
            variant="outlined"
          >
            Previous
          </Button>
          <Typography variant="body2" style={{ margin: "0 10px" }}>
            Page {page}
          </Typography>
          <Button
            onClick={() => handlePageChange(1)}
            disabled={page * matchesPerPage >= matches.length}
            variant="outlined"
          >
            Next
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Matches;
