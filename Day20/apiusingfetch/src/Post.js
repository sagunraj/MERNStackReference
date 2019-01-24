import React from "react";

const Post = ({ id, title, body, style }) => {
  return (
      <div style={style} className="col-md-4 card-text">
        <div style={style.id}>ID: {id}</div>
        <br />
        <div style={style.title}>Title: {title}</div>
        <br />
        Body: {body}
        <br />
      </div>
  );
};

export default Post;
