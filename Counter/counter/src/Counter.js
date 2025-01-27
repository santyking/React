import react, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            if (this.state.counter>0) {
                this.setState({ counter: this.state.counter - 1 });
            }
          }}
        >
          Subtract
        </button>
        <button
          onClick={() => {
            this.setState({ counter: 0 });
          }}
        >
          Reset
        </button>
      </>
    );
  }
}
export default Counter;
