import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Article from './components/Article/Article';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div className={styles.root}>
            <Grid container spacing={24}>
              <div className="App">
                <header className="App-header">
                  <h1 className="App-title">Frontend test</h1>
                </header>
                <Grid item xs={6}>
                  <Paper className={styles.paper} >
                    <Article nid={1} />
                  </Paper>
                </Grid>
              </div>
            </Grid>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
