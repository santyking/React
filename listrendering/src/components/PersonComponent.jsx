import React from 'react'

function PersonComponent() {
    const persons = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 25
        },
        {
            name: 'Doe',
            age: 35
        }
    ];
    const personlist = persons.map(person=> <h2>{person.name} is {person.age} years old</h2>);
  return (
    <div>
        {
            personlist
        }
    </div>
  )
}

export default PersonComponent
