import axios from 'axios';
import React,{useState,useEffect} from 'react'

function SinglePost() {
    const [post,setPost] = useState({
        id:0,
        title:""
    });
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>setPost(response.data))
    .catch(console.log('An error Occured'))},[]);
  return (
    <div>
        <h1>Single Post</h1>
        {
            post.title
        }
        is now 
        {
            post.id
        }
    </div>
  )
}

export default SinglePost