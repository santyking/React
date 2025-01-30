import React from 'react'

function Person(person,key) {
  return (
    <div>
      {key} i am {person.name}. I am {person.age} years old.
    </div>
  )
}

export default Person
