import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Asgn27 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>Assignment 27</h1>
      </Grid>
      {data.slice(0, 4).map((item) => (
        <Grid item xs={12}>
          <Card sx={{ bgcolor: "limegreen" }}>
            <CardContent>
              <h1>
                UserId : <span style={{ color: "red" }}>{item.id}</span>
              </h1>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
