import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const ContactForm = () => {
    return(<div>
        <Typography variant="h2">Contact Us</Typography><hr/>
        <form>
            <TextField style={{"width": "40%", "marginRight": "3px"}} label="Name" id="outlined-required" margin="normal"
            autoComplete="name" variant="outlined" required/>
            <TextField
            style={{"width": "40%", "marginLeft": "3px"}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          required
          autoComplete="email"
          margin="normal"
          variant="outlined"
        /><br/>
           
          <TextField required style={{"width": "80%"}}
          id="outlined-textarea"
          label="Message"
          multiline
            rows = "8"
          margin="normal"
          variant="outlined"
        /><br/>
        <Button variant="contained" color="primary">Send message &nbsp; <SendIcon/></Button>
        </form>
    </div>)
}

export default ContactForm;