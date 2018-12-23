import React from 'react';
import './main.css';
import logo from './fb.jpg';
import LoginForm from './LoginForm';
const Header = () => {
    return (
        <div>
            <div className="row header-row">
                <div className="col-md-6">
                    <img id="main-logo" src={logo}/>
                </div>
                <div className="col-md-6">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

export default Header;