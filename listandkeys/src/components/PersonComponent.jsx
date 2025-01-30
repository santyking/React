import React from 'react'

function PersonComponent() {
    const persons = [{id:1,name:"Santosh",age:30},{id:2,name:"Ankita",age:29},{id:3,name:"Anvi",age:1}]
    const personlist  = persons.map(person=>
        <Person key={person.id} ></Person>
    )
  return (
    <>

    </>
  )
}

export default PersonComponent
