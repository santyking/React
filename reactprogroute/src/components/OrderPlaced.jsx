import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderPlaced() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Ordered Placed</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default OrderPlaced