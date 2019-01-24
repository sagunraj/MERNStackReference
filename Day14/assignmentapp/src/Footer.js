import React, {Component} from 'react';
import Add from './Add';
import Contact from './Contact';

class Footer extends Component {
    render(){
        return <div>Footer
            <ul>
                <li><Add/></li>
                <li><Contact/></li>
            </ul>
        </div>
    }
}

export default Footer;