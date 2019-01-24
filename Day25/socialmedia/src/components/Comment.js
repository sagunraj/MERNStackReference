import React from 'react';

const Comment = ({comment}) => {
    return ( <div style={{padding: "0 20px 20px 20px", border: "1px solid black", marginBottom: "10px", borderRadius: "5px", background: "white", cursor: "pointer"}}>
    <h3>{comment.name}</h3>
    <div style={{textAlign: "justify"}}>{comment.body}</div>
  </div>);
}

export default Comment;