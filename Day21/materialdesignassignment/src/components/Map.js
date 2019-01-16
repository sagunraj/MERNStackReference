import React from 'react';
import { Typography } from '@material-ui/core';

const Map = () => {
    return (<div>
        <Typography variant="h2">Our Location</Typography><hr/>
<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1796979.044763668!2d84.1301497!3d28.397382!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1547654594927" width="100%" height="450" frameborder="0" style={{"border":0}} allowfullscreen></iframe>
    </div>);
}

export default Map;