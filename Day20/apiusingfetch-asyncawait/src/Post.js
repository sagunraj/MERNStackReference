import React from 'react';

const Post = ({id, title, body}) => {
    return (<div>
        ID: {id}<br/>
        Title: {title}<br/>
        Body: {body}<br/>
    </div>)
}

export default Post;