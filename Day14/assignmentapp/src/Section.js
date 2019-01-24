import React, {Component} from 'react';
import Headline from './Headline';
import News from './News';
class Section extends Component {
    render(){
        return <div>Section
            <ul>
                <li><Headline/></li>
                <li><News/></li>
            </ul>
        </div>
    }
}

export default Section;