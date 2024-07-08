import React from 'react';

const Post = ({ title, body }) => {
  return (
    <div className="post" style={{marginBottom:"40px",marginTop:"50px"}}>
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
};

export default Post;