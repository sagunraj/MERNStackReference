import React, {Component} from 'react';
export default class Person extends Component {
    componentDidUpdate(){
        console.log("Person component has been updated.");
    }

    componentWillUnmount(){
        console.log("Person component is going to be unmounted");
    }

    componentWillReceiveProps(prevProps, nextProps){
        console.log(prevProps, nextProps);
    }

    render(props){
        return(<div>
            Hello, this is from person component.<br/>
            {this.props.name}
        </div>);
    }
}