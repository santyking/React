import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure component is rendered");
    
    return (
      <div>
        pure Component
        {this.props.name}
      </div>
    )
  }
}

export default PureComp
