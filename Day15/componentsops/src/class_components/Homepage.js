import React from 'react';
import SearchButton from '../functional_components/SearchButton';
import SearchBox from '../functional_components/SearchBox';
import Logo from '../functional_components/Logo';
class Homepage extends React.Component {
    render(){
        return (
            <div>
                <Logo/>
                <SearchBox/>
                <SearchButton/>
            </div>
        )
    }
}

export default Homepage;