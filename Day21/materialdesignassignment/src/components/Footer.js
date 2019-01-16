import React from 'react';
import {Paper, Typography, Divider} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });
const Footer = (props) => {
    const {classes} = props;
    return (
        <Paper className={classes.root} elevation={1}>
        <div className="row">
        <div className="col-md-4">
       
        <Typography variant="subtitle1"><ul style={{"listStyleType":"none", "textAlign": "left"}}>
        <li><Typography variant="headline">Working Areas</Typography><Divider/></li>
        <li>Health and Education</li>
        <li>Behavioral Change Communication</li>
        <li>Good Governance and Human Rights</li>
        <li>Women Empowerment and Child Protection</li>
        </ul></Typography>
        </div>
        <div className="col-md-4">
        <Typography variant="subtitle1"><ul style={{"listStyleType":"none", "textAlign": "left"}}>
        <li><Typography variant="headline">Opportunities</Typography><Divider/></li>
        <li>Partner with us</li>
        <li>Internship with us</li>
        <li>Volunteer</li>
        <li>Apply for our fellowship</li>
        </ul></Typography>
        </div>
        <div className="col-md-4">
        <Typography variant="subtitle1"><ul style={{"listStyleType":"none", "textAlign": "left"}}>
        <li><Typography variant="headline">Contact Us</Typography><Divider/></li>
        <li>Call us at +977 01234567</li>
        <li>Visit us at Kathmandu, Nepal.</li>
        <li>Email us at info@info.com</li>
        </ul></Typography>
        </div>
        </div>
        <hr/>
        <Typography variant="subtitle1" align="center"> 
        &copy; 2019. Material Design Website. All rights reserved.</Typography>
    </Paper>
        )
}

export default withStyles(styles)(Footer);