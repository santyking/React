import axios from 'axios';
import React,{useState,useEffect} from 'react'

function SinglePost() {
    const [post,setPost] = useState({});
    const [postId,setPostId] = useState(1);
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=>setPost(response.data.title))
        .catch(error=>console.log(error))
    },[postId]);
  return (
    <div>
        <h1>Single Post</h1>
        <input type="text" value={postId} onChange={e=>setPostId(e.target.value)}/>
        <h2>{post}</h2>
    </div>
  )
}

export default SinglePost