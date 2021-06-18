import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <div className="main">
      <Grid container justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          My resume here!
        </Button>
      </Grid>
    </div>
  );
}

export default App;
