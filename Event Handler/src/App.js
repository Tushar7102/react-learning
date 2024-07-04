import React, { useState, useEffect } from 'react';
import Post from './componets/post';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const handleGetPosts = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  };

  return (
    <div>
      <button style={{marginLeft:"44%",padding:"18px",marginBottom:"40px",marginTop:"20px",backgroundColor:"#02FFFF"}} onClick={handleGetPosts}>GET POSTS</button>
      
      <div>
        {loading ? (
          <p style={{marginLeft:"44%",fontSize:"30px",fontWeight:"bold"}}>Loading...</p>
        ) : (
          posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;