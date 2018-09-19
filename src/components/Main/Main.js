import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Content from '../Content/Content'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 960,
    padding: theme.spacing.unit * 2,
    margin: 'auto',
  },
});

function Main(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/content" component={Content} />
        <Route path="/about" component={About} />
      </Switch>
    </Paper>
  )
}

export default withStyles(styles)(Main);
