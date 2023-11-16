import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const EmpList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/users");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid sx={{ marginTop: 1 }} container spacing={2}>
      {data.slice(0, 3).map((item) => (
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src={item.avatar} alt={item.name} />
              <h1>{item.name.toUpperCase()}</h1>
              <h3>{item.role}</h3>
              <h3>{item.email}</h3>
              <h3>{item.password}</h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
