import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });
const Banner = (props) => {
    const {classes} = props;
    return (<Paper className={classes.root} elevation={1}>
        <Typography variant="h1" >This is  the typography banner.</Typography>
    </Paper>)
}

export default withStyles(styles)(Banner);
