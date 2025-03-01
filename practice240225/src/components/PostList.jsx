import axios from 'axios';
import React,{useState,useEffect} from 'react'

function PostList() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>setPosts(response.data))
        .catch(error=>console.log(`Error : ${error}`))
    },[]);
  return (
    <div>
        <h1>Post List</h1>
        <ul>
            {
                posts.map(item=><li key={item.id}>{item.title}</li>)
            }
        </ul>
    </div>
  )
}

export default PostList