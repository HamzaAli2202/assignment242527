import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Grid, Card, CardContent } from "@mui/material";

export const Movie = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    );
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid sx={{ margin: "5px" }} container spacing={3}>
      <Grid sx={{ marginTop: 2 }} item xs={12}>
        <TextField variant="outlined" label="Enter Movie Name" fullWidth />
      </Grid>
      {data.slice(0, 4).map((item) => (
        <Grid sx={{ marginTop: 2 }} align="center" item xs={3}>
          <Card sx={{ height: 450 }}>
            <CardContent>
              <img src={item.Poster} alt={item.Title} />
              <h2>{item.Title}</h2>
              <p>{item.Year}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
