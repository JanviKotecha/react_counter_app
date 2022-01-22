import React from 'react';

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (    
        <center>
          <div
            style={{
              backgroundColor: '#cccc',
              color: 'black',
              padding: '50px',
            }}
          >
            <h2>Counter</h2>
            <h2>
              <button
                onClick={this.decrement}
                style={{
                  backgroundColor: 'lightblue',
                  color: 'black',
                  margin: '20px',
                  width:'50px',
                  padding:'6px'
                }} >
                -
              </button>
              {this.state.count}
              <button onClick={this.increment}  style={{
                  backgroundColor: 'lightblue',
                  color: 'black',
                  margin: '20px',
                  width:'50px',
                  padding:'6px'
                }}>+</button>
            </h2>
          </div>
        </center>
    );
  }
}

export default Counter;
