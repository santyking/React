import axios from 'axios';
import React,{useEffect,useState} from 'react'

function ComponentOne() {
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/postsas`)
        .then((response)=>{
            setSuccess(true);
            setPosts(response.data);
        })
        .catch((error)=>{
            setError(true);
            console.log(error);
            
        });
    })
  return (
    <div>
        <h1>Component One</h1>
        {
            success? 
            <ul>
                {
                    posts.map(item=><li key={item.id}>{item.body}</li>)
                }
            </ul>
            : <h2>Error Loading data</h2>  
        }

    </div>
  )
}

export default ComponentOne