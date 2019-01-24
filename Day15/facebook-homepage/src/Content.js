import React from 'react';
import './main.css';
import image from './image.png';
import SignUpForm from './SignUpForm';
const Content = () => {
    return (
        <div className="content row">
                <div className="col-md-6">
                    <p id="para">Facebook helps you connect and share with the<br/> people in your life.</p>
                    <img src={image}/>
                </div>
                <div className="col-md-6 form-div">
                    <h1 id="create">Create an account</h1>
                    <p id="below-create">It's free and always will be.</p>
                    <SignUpForm/>
                </div>
            </div>
    )
}

export default Content;