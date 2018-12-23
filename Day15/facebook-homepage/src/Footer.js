import React from 'react';
import Languages from './Languages';
import Options from './Options';
import Copyright from './Copyright';
const Footer = () => {
    return (
        <div className="row">
        <div className ="container">
            <Languages />
            <hr width="93%"/>
            <Options/>
            <Copyright/>
            </div>
        </div>
    )
}

export default Footer;