import React, {Component} from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';

export default class MovieContainer extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <MovieList/>
            </div>
        );
    }
}