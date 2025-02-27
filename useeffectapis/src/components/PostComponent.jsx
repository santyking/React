import axios from 'axios';
import React,{useState,useEffect} from 'react'

function PostComponent() {
    const [id,setId] = useState(1);
    const [buttonClick,setButtonClick] = useState(1);
    const [posts,setPosts] = useState({});
    function ClickHandler() {
        setButtonClick(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
        .then(response=>setPosts(response.data))
        .catch(err=>console.log(err))
    },[buttonClick]);
  return (
    <div>
        <h1>Post Component</h1>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={ClickHandler}>Click</button>
        <h2>{posts.body}</h2>
    </div>
  )
}

export default PostComponent