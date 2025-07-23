import axios from "axios";
import React, { useState, useEffect } from "react";

function ArrayItemDelete() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);
  const deleteItem =(id)=>{
    console.log("index is "+id)
    const newPosts = posts.filter(item=>item.id !== id);
    console.log(newPosts);
    setPosts(newPosts);
  }
  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post,index) => (
          <li key={post.id}>
            {post.id}-{post.title}
            <button onClick={()=>deleteItem(post.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayItemDelete;
