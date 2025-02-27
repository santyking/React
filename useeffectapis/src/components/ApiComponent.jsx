import axios from 'axios';
import React,{useState,useEffect} from 'react'

function ApiComponent() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setPosts(response.data))
        .catch(error=>console.error(error))
    })
  return (
    <div>
        <h1>Api Response</h1>
        
            <ul>
                {
                    posts.map(item=><li key={item.id}>{item.body}</li>)
                }
            </ul>
    </div>
  )
}

export default ApiComponent