import React from 'react';

const Card = (props) => {
    return(<div style={styles.cardStyle}>
        {props.children}
        <img src = {props.img}/>
    </div>);
}

const styles = {
    cardStyle : {
        width: "40%",
        border: "1px solid grey",
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "3px 3px 3px #aaa"
    }
}
export default Card;