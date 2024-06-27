import React, { Component } from 'react'
import Student from './Student'

export default class Parent extends Component {
  render() {
    return (
        <>
            <Student></Student>
            <button>Toggle</button>
        </>
    )
  }
}
