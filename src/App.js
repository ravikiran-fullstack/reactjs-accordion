import React from "react";
import useStyles from "./appStyles";

import Qnas from "./components/qnas/Qnas";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ marginTop: "100px" }}
      >
        <Grid item>
          <Paper className={classes.paper} elevation={3}>
            <Grid container style={{ padding: "50px" }} spacing={2}>
              <Grid item xs={3}>
                <Typography variant="h5">
                  Questions and Answers About Login
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Qnas></Qnas>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
