import React from 'react'

function MyComponent() {
    const names = ['John', 'Jane', 'Doe'];
    const namelist = names.map(name=> <h2>{name}</h2>);

  return (
    <div>
      {
        namelist
      }
    </div>
  )
}

export default MyComponent
