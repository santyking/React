import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {
  const [id, setId] = useState(0);
  const [search, setSearch] = useState(false);
  const [post, setPost] = useState({});
  useEffect(() => {
    if (search == true) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {setPost(response.data); setSearch(false)})
        .catch(()=>console.log("An error occured"))
    }
  }, [search]);
  return (
    <div>
      <h1>Post</h1>
      <p>Enter the Post Number</p>
      <input
        type="number"
        name="postid"
        id="postid"
        onChange={(e) => setId(e.target.value)}
      />
      <p>
        <button onClick={() => setSearch(true)}>Search</button>
      </p>
      {post.title}
    </div>
  );
}

export default Home;
