import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Counter from './Counter';
export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        <Button
          onClick={}
          variant="outline-info"
          className="m-1"
        >
         Reset
        </Button>
        {this.state.counters.map((e) => (
          <Counter key={e.id} onDelete={this.delete} counter={e}></Counter>
        ))}
      </div>
    );
  }

  delete = (counterId) => {
    const counters = this.state.counters.filter((e) => e.id != counterId);
    this.setState({
      counters,
    });
  };
}
