import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderPlaced from './OrderPlaced';

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>navigate('/ordered')}>Place Order</button>
    </div>
  )
}

export default Home