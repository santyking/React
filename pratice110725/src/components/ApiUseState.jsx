import axios from 'axios';
import React,{useState,useEffect} from 'react'

function ApiUseState() {
    const [post,setPost] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setPost(response.data);
            setLoading(false);
            setError("");
        })
        .catch(()=>{
            setLoading(false);
            setError("Something went wrong");
            setPost({});
        })
    },[])
  return (
    <>
        <h1>Post</h1>
        {
            loading?"Loading...":post.title
        }
        {
            error? error : null
        }
    </>
  )
}

export default ApiUseState