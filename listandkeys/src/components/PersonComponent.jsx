import React from 'react'
import Person from './Person'

function PersonComponent() {
    const persons = [{id:1,name:"Santosh",age:30},{id:2,name:"Ankita",age:29},{id:3,name:"Anvi",age:1}]
    const personlist  = persons.map(person=>
        <Person key={person.id} person={person}/>
    )
  return (
    <>
        {personlist}
    </>
  )
}

export default PersonComponent
