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
        <li><a href="#">Health and Education</a></li>
        <li><a href="#">Behavioral Change Communication</a></li>
        <li><a href="#">Good Governance and Human Rights</a></li>
        <li><a href="#">Women Empowerment and Child Protection</a></li>
        </ul></Typography>
        </div>
        <div className="col-md-4">
        <Typography variant="subtitle1"><ul style={{"listStyleType":"none", "textAlign": "left"}}>
        <li><Typography variant="headline">Opportunities</Typography><Divider/></li>
        <li><a href="#">Partner with us</a></li>
        <li><a href="#">Internship with us</a></li>
        <li><a href="#">Volunteer</a></li>
        <li><a href="#">Apply for our fellowship</a></li>
        </ul></Typography>
        </div>
        <div className="col-md-4">
        <Typography variant="subtitle1"><ul style={{"listStyleType":"none", "textAlign": "left"}}>
        <li><Typography variant="headline">Contact Us</Typography><Divider/></li>
        <li>Call us at <a href="tel: +97701234567">+977 01234567</a></li>
        <li>Visit us at Kathmandu, Nepal.</li>
        <li>Email us at <a href="mailto:info@info.com">info@info.com</a></li>
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