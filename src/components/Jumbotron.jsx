import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Jumbotron extends Component {
  render() {
    return (
      <div>
          <h1 variant="justify-content-center">Hello, world!</h1>
          <p>
            This is the tag line for my bookstore.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
      </div>
    );
  }
}

export default Jumbotron;
