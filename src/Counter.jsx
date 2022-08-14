import React, { Component } from 'react';

import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

export default class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  render() {
    return (
      <div>
        <Badge bg={this.getClassess()} className="m-2">
          {this.formatCount()}
        </Badge>

        <Button
          onClick={this.increment.bind(this)}
          variant="outline-primary"
          className="m-1"
        >
          Increment+
        </Button>

        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="outline-danger"
          className="m-1"
        >
          Delete-
        </Button>
      </div>
    );
  }

  increment() {
    // this.state.count++;
    this.setState({ value: this.state.value + 1 });
  }

  delete() {
    // this.state.count++;
    this.setState({ value: this.state.value + 1 });
  }

  getClassess() {
    return this.state.value === 0 ? 'warning' : 'primary';
  }

  formatCount() {
    return this.state.value === 0 ? 'Zero' : this.state.value;
  }
}
