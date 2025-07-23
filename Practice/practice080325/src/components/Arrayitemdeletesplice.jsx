import axios from "axios";
import React, { useState, useEffect } from "react";

function Arrayitemdeletesplice() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);
  const deleteItem =(index)=>{
    const newPosts = [...posts]; // Create a copy of the original array
    newPosts.splice(index, 1); // Remove the item at the specified index
    setPosts(newPosts);
  }
  return (
    <div>
      <h1>List of Post</h1>
      <ul>
        {posts.map((post,index) => (
          <li key={post.id}>
            {post.id}-{post.title}
            <button onClick={()=>deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Arrayitemdeletesplice;
